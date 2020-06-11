
const Discord = require('discord.js')
const client = new Discord.Client()


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  //if((msg.author).id == '201460893341450241') {
  //if(msg.content.toLowerCase().includes('a')) {
    //msg.channel.sendMessage('ok boomer');
  //}
  //else if(msg.content.toLowerCase().includes('e')) {
   // msg.channel.sendMessage('ok boomer');
  //}
    //else if(msg.content.toLowerCase().includes('i')) {
    //msg.channel.sendMessage('ok boomer');
  //}
    //else if(msg.content.toLowerCase().includes('o')) {
    //msg.channel.sendMessage('ok boomer');
  //}
    //else if(msg.content.toLowerCase().includes('u')) {
    //msg.channel.sendMessage('ok boomer');
  //}
  //}
  //else {
     if (msg.content.toLowerCase().includes('send reminder')) {
    //msg.channel.sendMessage('hey everyone! reminder that practice is today from 8 to 10pm in the SDS room')
    msg.channel.sendMessage('hey everyone! reminder that JHEC Fun Time is Wednesday from 9 to 11pm on zoom')
  }
  else if (msg.content.toLowerCase().includes('fire')) {
    msg.channel.sendMessage('its lit')
  }
  else if (msg.content.toLowerCase().includes('emma')) {
    msg.channel.sendMessage('free me mather')
  }
  else if (msg.content.toLowerCase().includes('meatball')) {
    //msg.channel.sendMessage('<:firesafety:653503546783825924>')
    msg.channel.sendMessage('safdlhkasdflaksdfhalsdkfhalskdf help me')
  }
  else if (msg.content.includes('wow')) {
    msg.channel.sendMessage('nerd')
  }
  else if (msg.content.includes('minecraft')) {
    msg.channel.sendMessage('nerd')
  }
  else if (msg.content.includes('cult')) {
    msg.channel.sendMessage('We Are Not A Cult')
  }
  //}
})


client.login(process.env.BOT_TOKEN)
