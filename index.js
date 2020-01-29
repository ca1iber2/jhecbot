require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content.toLowerCase().includes('show theme')) {
    msg.channel.sendMessage('i think cats (2019) would be a great theme')
  }
  else if (msg.content === 'matt') {
    msg.channel.sendMessage('matt is short for matthew rat is short for ratthew')
  }
  else if (msg.content === 'Matt') {
    msg.channel.sendMessage('matt is short for matthew rat is short for ratthew')
  }
})

client.login(process.env.BOT_TOKEN)
