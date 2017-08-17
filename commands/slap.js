exports.run = function(client, message, args) {
const Discord = require('discord.js');
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage('[:x:] | **Please mention a user!**');
    }
    var slap = new Discord.RichEmbed()
      .setTitle("Someoene's showing anger here OwO")
      .setColor("0x00AE86")
      .setDescription("**"+message.author.username+"** slapped "+member+"")
      .setImage("https://cdn.discordapp.com/attachments/344144728192974858/344919125937618944/giphy_3.gif");

    message.channel.sendEmbed(slap);
  };

  exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [],
  permLevel: 0
  };

  exports.help = {
  name: 'slap',
  description: 'Slaps the mentioned user (special thanks to Smartbunny009 for the code & idea)',
  usage: '&slap <@mention> (special thanks to Smartbunny009 for the code & idea)'
  };
