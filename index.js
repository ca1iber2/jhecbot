
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content.toLowerCase().includes('send reminder')) {
    msg.channel.sendMessage('hey everyone! reminder that practice is today from 8 to 10pm in the SDS room')
  }
  else if (msg.content.toLowerCase().includes('fire')) {
    msg.channel.sendMessage('its lit')
  }
  else if (msg.content.toLowerCase().includes('emma')) {
    msg.channel.sendMessage('thats fantastic')
  }
  
})

client.login(process.env.BOT_TOKEN)
