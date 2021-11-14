const { errorHandler } = require("../helpers")
const { Keyboard, Key } = require("telegram-keyboard");

addwalletKeyboard = Keyboard.make([Key.callback("Add Wallet Addess", "addwallet")]).inline();


module.exports = async (ctx) => {
    joined = await ctx.telegram.getChatMember(process.env.Group_id_two ,ctx.from.id );
    console.log(joined)
    if (joined.status == "left")
        return ctx.answerCbQuery("You Didn't Joined Group!!! ❌", (alert = true));
    ctx.deleteMessage().catch((err) => console.log(err));
    ctx.answerCbQuery("You Joined Group!!! ✅", (alert = true)).catch(err => errorHandler(err, ctx))
    ctx.reply("Last Step Added Wallet Address To Continue", addwalletKeyboard)

}