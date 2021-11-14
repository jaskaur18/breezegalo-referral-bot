const { errorHandler } = require("../helpers")
const { Keyboard, Key } = require("telegram-keyboard");

module.exports = async (ctx) => {
    ctx.deleteMessage().catch((err) => console.log(err));
    ctx.reply("Enter Your Wallet Address")
    ctx.scene.enter("add-wallet")
}