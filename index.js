const Discord = require('discord.js')
const client = new Discord.Client()




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  
  //this part of the code uses a user id to detect when that user has sent a message and say something afterwards
  /*if((msg.author).id == '288102907356905472') {
      if(msg.content.includes('i love you')) {
         msg.channel.sendMessage('I love you too camille');
      
         }
      else if (msg.content.includes('i love you meatball')) {
         msg.channel.sendMessage('I love you too camille');
     
      }
  }
  else if ((msg.author).id == '275783651504029697'){
      if(msg.content.includes('i love you')) {
         msg.channel.sendMessage('I love you too emma');
      
      }
      else if (msg.content.includes('i love you meatball')) {
         msg.channel.sendMessage('I love you too emma')
       
      }
  }
  */
  //checks if message author is a bot
  if ((msg.author).id == '671864740942970933') {
      return;
  }
  
  else{
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
    
      else if (msg.content == '!role red') {
         msg.member.roles.add('735647659041357885')
         msg.channel.sendMessage('role added')
      }
      //when send reminder is sent, bot sends reminder message
      else if (msg.content.toLowerCase().includes('send reminder')) {
         //msg.channel.sendMessage('hey everyone! reminder that practice is today from 8 to 10pm in the SDS room')
         msg.channel.sendMessage('hey @2021 @2022 @2023 @2024 Chickens! reminder that JHEC GBM is Monday from 8 to 10pm on zoom')
      }
 
      else if (msg.content.toLowerCase().includes('i love you')) {
         if((msg.author).id == '524343700055261185') {
            msg.channel.sendMessage('I love you too camille');
         }
         else if ((msg.author).id == '275783651504029697'){
            msg.channel.sendMessage('I love you too emma');
         }
         else{
            msg.channel.sendMessage('I love you too')
         }
      }
    
      else if (msg.content.toLowerCase().includes('meatball')) {
         //msg.channel.sendMessage('<:firesafety:653503546783825924>')
         msg.channel.sendMessage('yes that is me')
      }
    
      else if (msg.content.toLowerCase().includes('cult')) {
         msg.channel.sendMessage('We Are Not A Cult')
      }
   
  }
})

//client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  
  //member.send('Welcome to the JHEC server! Please read the rules channel, and change your nickname to your name, or have your name in parentheses')
//})

client.login(process.env.BOT_TOKEN)
