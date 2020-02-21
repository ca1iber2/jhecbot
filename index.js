
const Discord = require('discord.js')
const client = new Discord.Client()


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
const userId = message.guild.members.find(m => m.id === "200413880843894785");
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
  if(!message.sender === userID)
{

if(msg.content.toLowerCase().includes(' ')
{
    message.channel.send('ok boomer');
}
}

client.login(process.env.BOT_TOKEN)
