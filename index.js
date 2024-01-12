const BOT_TOKEN = '6941036270:AAHciNs4FrEcVe1T4LdE4Art2nbxpRPayR0';

const {Telegraf} = require('telegraf');

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply(`Hello, ${ctx.message.from.username}, Its EchoBot`)
})

bot.help((ctx) => {
    ctx.reply(`Send any message and i will copy it`)
})

bot.on('message', (ctx) => {
    ctx.telegram.sendCopy(ctx.chat.id, ctx.message)
})

bot.launch().then(r => {
    console.log('started')
}).catch((err) => {
    console.log(err)
})