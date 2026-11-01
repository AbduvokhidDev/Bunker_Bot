require('dotenv').config()
const express = require('express')
const app = express()
const bot = require('./bot')
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('salloom bolajonlar')
})
app.listen(PORT, () => console.log(`server yuropti ${PORT}`));

bot.launch()
console.log('bot ishladi');

