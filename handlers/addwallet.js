const { errorHandler } = require("../helpers")
const { Keyboard } = require("telegram-keyboard");

keyboard = Keyboard.make([["Leaderboard đ"], ["My Points đ"], ["My Wallet Address đ°"], ['Shill Message đŹđ§', "æšćčżææĄ đšđł"]]).reply();

module.exports = () => async (ctx) => {
    await ctx.reply(`Your Wallet Address - ${ctx.message.text} Has Been Saved/Changed

/changewallet To Change Wallet Address    `)
    await ctx.reply("Message Here Explain About The Project", keyboard).catch(err => errorHandler(err, ctx))

    

    ctx.scene.leave()
}