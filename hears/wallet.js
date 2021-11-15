const { errorHandler } = require("../helpers")

module.exports = () => async (ctx) => {
    if (ctx.chat.type != 'private') return
    user = await db.collection("userdata").findOne({ _id: ctx.from.id })
    await db.collection("userdata").updateOne({ _id: Number(user.Referral_parent) }, {
        $inc: {
            Referral: 1
        }
    })
    ctx.reply(`
Your current wallet address is:  ${user.wallet_address}

/changewallet To change your Wallet Address`).catch(err => errorHandler(err, ctx))
}