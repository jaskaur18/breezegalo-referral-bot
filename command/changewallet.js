
const { errorHandler } = require('../helpers')
const { Keyboard, Key } = require("telegram-keyboard");


module.exports = () => async (ctx) => {
    if (ctx.chat.type != 'private') return
    ctx.reply("Enter Your New Wallet Address").catch(err => errorHandler(err , ctx))
    ctx.scene.enter("add-wallet")
}