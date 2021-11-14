const { errorHandler } = require("../helpers")
const { Keyboard } = require("telegram-keyboard");

keyboard = Keyboard.make([["Leaderboard 📊"], ["My Points 🎖"], ["My Wallet Address 💰"], ['Shill Message 🇬🇧', "推广文案 🇨🇳"]]).reply();

module.exports = () => async (ctx) => {
    if (ctx.chat.type != 'private') return
    top_Referral = await db.collection("userdata").find().sort({ Referral: -1 }).limit(20).toArray()
    i = 0
    userlist = top_Referral.map((e) => {
        i++
        return `${i} ${e.first_name} ${e.last_name} - ${e.Referral} Points`
    })
    userlist = userlist.join("\n");
    ctx.reply(`
Top 20 Referral -
${userlist}`,keyboard).catch(err => errorHandler(err,ctx))
}