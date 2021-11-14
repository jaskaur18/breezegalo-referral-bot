const { errorHandler } = require("../helpers")
const { Keyboard } = require("telegram-keyboard");

keyboard = Keyboard.make([["Leaderboard 📊"], ["My Points 🎖"], ["My Wallet Address 💰"], ['Shill Message 🇬🇧', "推广文案 🇨🇳"]]).reply();

module.exports = () => async (ctx) => {
    await ctx.reply(`Your Wallet Address - ${ctx.message.text} Has Been Saved/Changed

/changewallet To Change Wallet Address    `)
    await ctx.reply("Message Here Explain About The Project", keyboard).catch(err => errorHandler(err, ctx))

    await db.collection("userdata").updateOne({ _id: ctx.from.id },
        { $set: { joined_group: true, wallet_address: ctx.message.text } })

    ctx.scene.leave()
}