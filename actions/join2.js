const {errorHandler} = require('../helpers')
const { Keyboard, Key } = require("telegram-keyboard");

module.exports = async (ctx) => {
    joined = await ctx.telegram.getChatMember(process.env.Group_id ,ctx.from.id).catch(err => errorHandler(err,ctx))
    if (joined.status == "left")
        return ctx.answerCbQuery("You Didn't Joined Group!!! ❌", (alert = true));
    ctx.deleteMessage().catch(console.log("Error "));
    ctx.answerCbQuery("You Joined Group!!! ✅", (alert = true)).catch(err => errorHandler(err,ctx))
    let joinbot = Keyboard.make([
        Key.url("Join Group", process.env.Group_Link_two),
        Key.callback("Joined ✅", "join_bot3"),
    ]).inline();
    ctx.reply("⛔️ You must join our Telegram Channel 👇🏼", joinbot).catch(err => errorHandler(err,ctx))
}