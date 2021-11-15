const { errorHandler } = require("../helpers")
const { Keyboard, Key } = require("telegram-keyboard");


keyboard = Keyboard.make([["Leaderboard 📊"], ["My Points 🎖"], ["My Wallet Address 💰"], ['Shill Message 🇬🇧', "推广文案 🇨🇳"]]).reply();

module.exports = async (ctx) => {
    joined = await ctx.telegram.getChatMember(process.env.Group_id_two, ctx.from.id);
    if (joined.status == "left")
        return ctx.answerCbQuery("You did not join the Group!!! ❌", (alert = true));
    ctx.deleteMessage().catch((err) => console.log(err));
    user = await db.collection("userdata").findOne({ _id: ctx.from.id })
    ctx.answerCbQuery("Thank you for join the Group!!! ✅", (alert = true)).catch(err => errorHandler(err, ctx))
    await db.collection("userdata").updateOne({ _id: ctx.from.id },
        { $set: { joined_group: true } })
    await db.collection("userdata").updateOne({ _id: Number(user.Referral_parrent) },
        { $inc: { Referral: 1 } })
    await ctx.reply("Welcome to FlokiZap", keyboard).catch(err => errorHandler(err, ctx))

    await ctx.telegram.sendMessage(user.Referral_parrent, `
    New User ${ctx.from.first_name} ${ctx.from.last_name} (${ctx.from.id}) Joined From Your Referral Link
    `)


}