const { errorHandler } = require("../helpers")
const { Keyboard, Key } = require("telegram-keyboard");


keyboard = Keyboard.make([["Leaderboard 📊"], ["My Points 🎖"], ["My Wallet Address 💰"], ['Shill Message 🇬🇧', "推广文案 🇨🇳"]]).reply();

module.exports = async (ctx) => {
    joined = await ctx.telegram.getChatMember(process.env.Group_id_two ,ctx.from.id );
    console.log(joined)
    if (joined.status == "left")
        return ctx.answerCbQuery("You did not join the Group!!! ❌", (alert = true));
    ctx.deleteMessage().catch((err) => console.log(err));
    ctx.answerCbQuery("Thank you for join the Group!!! ✅", (alert = true)).catch(err => errorHandler(err, ctx))
    await db.collection("userdata").updateOne({ _id: ctx.from.id },
        { $set: { joined_group: true } })
    await ctx.reply("Welcome to FlokiZap", keyboard).catch(err => errorHandler(err, ctx))


}