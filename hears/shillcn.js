
const { errorHandler } = require('../helpers')


module.exports = () => async (ctx) => {
    if (ctx.chat.type != 'private') return
    ctx.reply(`
⚡️lordWAR⚡️

该项目拥有自己的P2E游戏、跨链NFT市场和奖励系统。该团队也在为BSC🔥开发他们自己的LORDWAR平台。
    
🎮 Play-To-EarN RPG模式
🤯用区块链经济设计来奖励玩家的贡献
💥一场革命，取代目前无聊的区块链游戏。
🚀lordWAR平台 - 在BSC上推出。
👨Dev is Doxxed
    
📝审计链接：https://github.com/TechRate/Smart-Contract-Audits/blob/main/November/lordWAR.pdf
    
不要错过他们的小型和独家预售👇👀
    
    
https://t.me/${ctx.me}?start=${ctx.from.id}`).catch(err => errorHandler(err, ctx))
}