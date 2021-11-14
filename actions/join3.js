const { errorHandler } = require("../helpers")
const { Keyboard, Key } = require("telegram-keyboard");


keyboard = Keyboard.make([["Leaderboard 📊"], ["My Points 🎖"], ["My Wallet Address 💰"], ['Shill Message 🇬🇧', "推广文案 🇨🇳"]]).reply();

module.exports = async (ctx) => {
    joined = await ctx.telegram.getChatMember(process.env.Group_id_two ,ctx.from.id );
    console.log(joined)
    if (joined.status == "left")
        return ctx.answerCbQuery("You Didn't Joined Group!!! ❌", (alert = true));
    ctx.deleteMessage().catch((err) => console.log(err));
    ctx.answerCbQuery("You Joined Group!!! ✅", (alert = true)).catch(err => errorHandler(err, ctx))
    await ctx.reply("Message Here Explain About The Project", keyboard).catch(err => errorHandler(err, ctx))


}