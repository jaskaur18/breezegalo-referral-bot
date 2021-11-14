const { inspect } = require('util')


// eslint-disable-next-line no-console
const debug = (err, ctx) => {
  console.log(err);
  ctx.reply("Oh Error Happened 😢.");
  ctx.telegram
    .sendMessage(
      process.env.Admin_id,
      `
Error Happned ${ctx.from.first_name}
Id - ${ctx.from.id} Username - @${ctx.from.username}
  
${err}
  `
    )
    .catch((err) => console.log(err));
}

// eslint-disable-next-line no-console
const errorHandler = (error, ctx) => debug(error, ctx)



const makeUserMention = ({
  id,
  username,
  first_name: firstName,
  last_name: lastName,
}) => username
    ? `@${username}`
    : `[${firstName || lastName}](tg://user?id=${id})`

module.exports = {
  debug,
  errorHandler,
  makeUserMention,
}