const { Telegraf, BaseScene, Stage, session } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command("helo" ,ctx => ctx.reply("hey"))
bot.hears(/^\/start (.+[1-9]$)/, async (ctx) => {
    try {
        refferal_parent = ctx.match[1];
        user_exits = await db.collection("userdata").findOne({ _id: ctx.from.id });
        if (user_exits != undefined) {
            canjoin = user_exits.joined_group;
            if (canjoin == false)
                return ctx.reply(
                    `Add 3 People To Continue Currently - ${canjoin} Added`,
                    main_keyboard
                );
            canjoin = user_exits.group_added;
            return ctx.reply(
                "Hey and welcome to the Charmander token !!!With this bot you have the chance to win a big Coinairdrop (Top 50 counts).",
                keyboard
            );
        }
        await db.collection("userdata").insertOne({
            _id: ctx.from.id,
            username: ctx.from.username,
            first_name: ctx.from.first_name,
            last_name: ctx.from.last_name,
            joined_group: false,
            wallet_address: 0,
            Referral: 0,
            Referral_parrent: refferal_parent,
            Refferal_link: `https://t.me/${ctx.me}?start=${ctx.from.id}`
        });
        await ctx.reply(
            "Hey and welcome to the Charmander token !!!With this bot you have the chance to win a big Coinairdrop (Top 50 counts).",
            main_keyboard
        );
    } catch (err) {
        sendError(ctx, err);
    }
});

bot.start(async (ctx) => {
    try {
        user_exits = await db.collection("userdata").findOne({ _id: ctx.from.id });
        if (user_exits != undefined) {
            canjoin = user_exits.group_added;
            if (canjoin < 3)
                return ctx.reply(
                    `Add 3 People To Continue Currently - ${canjoin} Added`,
                    main_keyboard
                );
            return ctx.reply(
                "Hey and welcome to the Charmander token !!!With this bot you have the chance to win a big Coinairdrop (Top 50 counts)..",
                keyboard
            );
        }

        await db.collection("userdata").insertOne({
            _id: ctx.from.id,
            username: ctx.from.username,
            first_name: ctx.from.first_name,
            last_name: ctx.from.last_name,
            group_added: 0,
            Referral: 0,
            Referral_parrent: 0,
        });

        ctx.reply(
            "Hey and welcome to the Charmander token !!!With this bot you have the chance to win a big Coinairdrop (Top 50 counts)..",
            main_keyboard
        );
    } catch (err) {
        sendError(ctx, err);
    }
});