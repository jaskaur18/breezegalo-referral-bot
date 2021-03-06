
const { errorHandler } = require('../helpers')
const { Keyboard, Key } = require("telegram-keyboard");

let main_keyboard = Keyboard.make([
    Key.callback("Join Bot", "join_bot"),
]).inline();

keyboard = Keyboard.make([["Leaderboard đ"], ["My Points đ"], ["My Wallet Address đ°"], ['Shill Message đŹđ§', "æšćčżææĄ đšđł"]]).reply();


module.exports = () => async (ctx) => {
    if (ctx.chat.type === 'private') {
        try {
            Referral_parent = ctx.match[1];
            user_exits = await db.collection("userdata").findOne({ _id: ctx.from.id });
            if (user_exits != undefined) {
                canjoin = user_exits.joined_group;
                if (canjoin == false)
                    return ctx.reply(
                        `Join our Main Chat To Continue`,
                        main_keyboard
                    );
                return ctx.reply(
                    "Welcome to the Referral contest. The top 20 by the end of the deadline will be granted a whitelist spot!",
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

            await ctx.reply(
                "Welcome to the Referral contest. The top 20 by the end of the deadline will be granted a whitelist spot!",
                main_keyboard
            );
        } catch (err) {
            errorHandler(err, ctx)
        }
    }
}