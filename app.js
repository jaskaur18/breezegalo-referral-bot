require("dotenv").config()
const { Telegraf, BaseScene, Stage, session } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN)
const stage = new Stage();
const { db } = require("./db");
const { start_command, Referral_start, changewalletCommand } = require("./command")
const { join1, join2, join3, setwallet } = require("./actions")
const { dashboard, mypoint, wallet, shillen, shillcn } = require("./hears")
const { addwalletHandler } = require("./handlers")
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
const addwallet = new BaseScene("add-wallet");
stage.register(addwallet);
bot.use(session());
bot.use(stage.middleware());
////////////////////////////////////////////////////////////////


//referral start command
bot.hears(/^\/start (.+[1-9]$)/, Referral_start());

//start command
bot.start(start_command());

//change wallet command
bot.command("changewallet", changewalletCommand());

//JoinFirst Group
bot.action("join_bot", join1);

//join second Group

bot.action("join_bot2", join2);


//check second Group

bot.action("join_bot3", join3);

//add wallet
bot.action("addwallet", setwallet)

//leaderboard button
bot.hears(/Leaderboard 📊/, dashboard())

//my point button
bot.hears(/My Points 🎖/, mypoint())

//my wallet button
bot.hears(/My Wallet Address 💰/, wallet())

//shill message button english
bot.hears(/Shill Message 🇬🇧/, shillen())

//shill messae button chinise
bot.hears(/推广文案 🇨🇳/, shillcn())

//change add wallet handler
addwallet.on("message", addwalletHandler())

//bot start
bot.launch(console.log("Bot Starting Working"))