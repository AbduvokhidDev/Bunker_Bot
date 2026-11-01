const { Telegraf, Markup } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)


bot.start(ctx => {
  ctx.reply(`welcome${ctx.from.first_name}bolajonim`, Markup.keyboard([
    ['men xaqimda'],
    ['bot xaqida malumotlar', 'Bot va user']
  ]).resize())

})

bot.help(ctx => ctx.reply('adminga murojat qiling'))

bot.hears('men xaqimda', ctx => {

  ctx.reply(`

    <b>FOYDALANUVCHI MA'LUMOTLARI</b>

━━━━━━━━━━━━━━━━━━

   Ism: <b>${ctx.from.first_name}</b>
   Familya: <b> ${ctx.from.last_name}</b>
   Username: <b>@${ctx.from.username}</b>
   ID: <code>${ctx.from.id}</code>

━━━━━━━━━━━━━━━━━━

Ma'lumotlaringiz muvaffaqiyatli olindi!
   `,
    { parse_mode: "HTML" })

})

bot.hears('bot xaqida malumotlar', ctx => {
  ctx.reply(
    `<b>BOT XQIDA MALUMOTLAR </b>

    ━━━━━━━━━━━━━━━━━━

    Bot nomi: <b>${ctx.botInfo.first_name}</b>
    Bot id: <code>${ctx.botInfo.id}</code>
    Username <b>@${ctx.botInfo.username}</b>

    Bot xolati:<b>Faol</b>

    ━━━━━━━━━━━━━━━━━━

    Sizga xizmat qilishdan mamnunmiz!
    `, { parse_mode: "HTML" }
  )
})




bot.hears('Bot va user', ctx => {
  ctx.reply(`

  <b>BOT XAQIDA</b>

  ━━━━━━━━━━━━━━━━━━
  Username: <b>${ctx.botInfo.username}</b>
  ID: <code>${ctx.botInfo.id}</code>

  ━━━━━━━━━━━━━━━━━━

 <b>FOYDALANUVCHI MALUMOTLARI</b>

 Ism: <b>${ctx.from.first_name}</b>
 Familya: <b>${ctx.from.last_name}</b>
 Username: <b>@${ctx.from.username}</b>
 ID: <code>${ctx.from.id}</code>

 ━━━━━━━━━━━━━━━━━━

 Ma'lumotlar muvaffaqiyatli olindi!
   `, { parse_mode: "HTML" }
  )
})

module.exports = bot
