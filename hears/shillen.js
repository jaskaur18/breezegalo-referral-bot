
const { errorHandler } = require('../helpers')


module.exports = () => async (ctx) => {
    if (ctx.chat.type != 'private') return
    ctx.reply(`
⚡️lordWAR⚡️

🆕 Project that with its own P2E game, cross-chain NFT marketplace and reward system. The Team is also developing their own LORDWAR platform for BSC 🔥
    
🎮 PLAY-TO-EARN RPG model
🤯Blockchain economic design used to reward players for their contributions
💥A revolution to replace the current boring blockchain games.
🚀lordWAR Platform – launch on BSC.
👨 Dev is Doxxed
    
📝  Audit link: https://github.com/TechRate/Smart-Contract-Audits/blob/main/November/lordWAR.pdf
    
Don't Miss Out on their small and exclusive Presale👇👀
    
https://t.me/${ctx.me}?start=${ctx.from.id}`).catch(err => errorHandler(err, ctx))
}