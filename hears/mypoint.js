
const { errorHandler } = require('../helpers')

module.exports = () => async (ctx) => {
    if (ctx.chat.type != 'private') return
        try {
           user = await db.collection('userdata').findOne({ _id:ctx.from.id})
           ctx.reply(`
Hello ${ctx.from.first_name}
Your Referral Point - ${user.Referral}
Referral Link - ${user.Referral_link}
Referral Parent - ${user.Referral_parrent}`)
        } catch (err) {
            errorHandler(err,ctx)
        }
}