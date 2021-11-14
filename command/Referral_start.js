
const { errorHandler } = require('../helpers')
const { Keyboard, Key } = require("telegram-keyboard");

let main_keyboard = Keyboard.make([
    Key.callback("Join Bot", "join_bot"),
]).inline();

keyboard = Keyboard.make([["Leaderboard 📊"], ["My Points 🎖"], ["My Wallet Address 💰"], ['Shill Message 🇬🇧', "推广文案 🇨🇳"]]).reply();


module.exports = () => async (ctx) => {
    if (ctx.chat.type === 'private') {
        try {
            Referral_parent = ctx.match[1];
            user_exits = await db.collection("userdata").findOne({ _id: ctx.from.id });
            if (user_exits != undefined) {
                canjoin = user_exits.joined_group;
                if (canjoin == false)
                    return ctx.reply(
                        `Join These Group To Continue`,
                        main_keyboard
                    );
                return ctx.reply(
                    "Hey and welcome to the Charmander token !!!With this bot you have the chance to win a big Coinairdrop (Top 50 counts).",
                    keyboard
                );
            }
            await db.collection("userdata").insertOne({
                _id: ctx.from.id,
                username: ctx.from.username,
                first_name: ctx.from.first_name,
                last_name: ctx.from.last_name,
                joined_group: false,
                wallet_address: 0,
                Referral: 0,
                Referral_parrent: Referral_parent,
                Referral_link: `https://t.me/${ctx.me}?start=${ctx.from.id}`
            });
            await db.collection("userdata").updateOne({ _id: Number(Referral_parent) }, {
                $inc: {
                    Referral: 1
                }
            })
            ctx.telegram.sendMessage(Referral_parent, `
            New User ${ctx.from.first_name} ${ctx.from.last_name} (${ctx.from.id}) Joined From Your Referral Link
            `)
            await ctx.reply(
                "Hey and welcome to the Charmander token !!!With this bot you have the chance to win a big Coinairdrop (Top 50 counts).",
                main_keyboard
            );
        } catch (err) {
            errorHandler(err, ctx)
        }
    }
}