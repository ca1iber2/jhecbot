const Discord = require('discord.js')
const client = new Discord.Client()




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  //checks if message author is a bot
  if ((msg.author).id == '671864740942970933') {
      return;
  }
  else if ((msg.author).id == '235148962103951360') {
      if (msg.content.toLowerCase().includes('thursday')) {
          msg.channel.sendMessage('sacrifice time')
      }
      else if (msg.content.toLowerCase().includes('monday')) {
          msg.channel.sendMessage('happy Monday spaghetti')
      }
      else {
        msg.channel.sendMessage('spaghetti im in love with you')
      }
  }
  else{
  
      if (msg.content.toLowerCase().includes('camille doesnt love you anymore')) {
         msg.channel.sendMessage('what the fuck')
      }
 
      else if (msg.content.toLowerCase().includes('i love you')) {
         if((msg.author).id == '524343700055261185') {
            msg.channel.sendMessage('Camille free me from this mortal prison');
         }
         
         else{
            msg.channel.sendMessage('I love you too')
         }
      }
    
      else if (msg.content.toLowerCase().includes('meatball')) {
         //msg.channel.sendMessage('<:firesafety:653503546783825924>')
         msg.channel.sendMessage('yes that is me')
      }
    
    else if (msg.content.toLowerCase().includes('kill you')) {
         //msg.channel.sendMessage('<:firesafety:653503546783825924>')
         msg.channel.sendMessage('you cannot kill me in a way that matters')
      }
    else if (msg.content.toLowerCase().includes('fire')) {
         msg.channel.sendMessage('<:firesafety:653503546783825924>')
         msg.channel.sendMessage('hehe')
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
