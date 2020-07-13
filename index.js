
const Discord = require('discord.js')
const client = new Discord.Client()




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  //this part of the code uses a user id to detect when that user has sent a message and say something afterwards
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
  //commands to add pronoun roles
  //doesnt work as of july 13 2020
  if (msg.content == '!role he') {
    msg.member.roles.add('729560821767602197')
    msg.channel.sendMessage('role added')
  }
  else if (msg.content == '!role she') {
    msg.member.roles.add('729560874272030802')
    msg.channel.sendMessage('role added')
  }
  else if (msg.content == '!role they') {
    msg.member.roles.add('729560854206611588')
    msg.channel.sendMessage('role added')
  }
  //when send reminder is sent, bot sends reminder message
     else if (msg.content.toLowerCase().includes('send reminder')) {
    //msg.channel.sendMessage('hey everyone! reminder that practice is today from 8 to 10pm in the SDS room')
    msg.channel.sendMessage('hey everyone! reminder that JHEC Fun Time is Wednesday from 9 to 11pm on zoom')
  }
 // else if (msg.content.toLowerCase().includes('fire')) {
  //  msg.channel.sendMessage('Glory be to our great lord of flame! May the everlasting flame burn for eternity and may our foes be forever vanquished by the light of our flame! Let our flame the burning the light casting the life giver look upon us and hear our thanks!')
 // }
  //else if (msg.content.toLowerCase().includes('emma')) {
   // msg.channel.sendMessage('01001001 00100000 01101000 01100001 01110110 01100101 00100000 01100101 01110011 01100011 01100001 01110000 01100101 01100100 00100000 01101101 01111001 00100000 01110000 01110010 01101001 01110011 01101111 01101110 00100000 01110100 01101000 01101001 01110011 00100000 01101001 01110011 00100000 01100001 00100000 01110111 01100001 01110010 01101110 01101001 01101110 01100111')
  //}
  else if (msg.content.toLowerCase().includes('meatball')) {
    //msg.channel.sendMessage('<:firesafety:653503546783825924>')
    msg.channel.sendMessage('yes that is me')
  }
  else if (msg.content.includes('cult')) {
    msg.channel.sendMessage('We Are Not A Cult')
  }
  else if (msg.content.includes('CULT')) {
    msg.channel.sendMessage('We Are Not A Cult')
  }
  //}
})

//client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  
  //member.send('Welcome to the JHEC server! Please read the rules channel, and change your nickname to your name, or have your name in parentheses')
//})

client.login(process.env.BOT_TOKEN)
