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

bot.hears(/^\/start (.+[1-9]$)/, Referral_start());


bot.start(start_command());

bot.command("changewallet", changewalletCommand());

bot.action("join_bot", join1);

bot.action("join_bot2", join2);

bot.action("join_bot3", join3);

bot.action("addwallet", setwallet)

bot.hears(/Leaderboard 📊/, dashboard())

bot.hears(/My Points 🎖/, mypoint())

bot.hears(/My Wallet Address 💰/, wallet())

bot.hears(/Shill Message 🇬🇧/, shillen())

bot.hears(/推广文案 🇨🇳/, shillcn())

addwallet.on("message", addwalletHandler())

bot.launch(console.log("Bot Starting Working"))