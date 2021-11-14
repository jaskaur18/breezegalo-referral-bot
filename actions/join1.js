const {errorHandler} = require("../helpers")
const { Keyboard, Key } = require("telegram-keyboard");

module.exports = async (ctx) =>{
    ctx.deleteMessage().catch(err => console.error(err));
    let joinbot = Keyboard.make([
        Key.url("Join Group", process.env.Group_Link),
        Key.callback("Joined ✅", "join_bot2"),
    ]).inline();
    ctx.reply("⛔️ You must join our Telegram Channel", joinbot).catch(err => errorHandler(err,ctx))
}