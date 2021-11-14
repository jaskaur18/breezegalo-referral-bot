const { errorHandler } = require("../helpers")

module.exports = () => async (ctx) => {
    if (ctx.chat.type != 'private') return
    user = await db.collection("userdata").findOne({ _id: ctx.from.id })
    ctx.reply(`
Your current wallet address is:  ${user.wallet_address}

/changewallet To Change Wallet Address`).catch(err => errorHandler(err, ctx))
}