exports.run = function(client, message, args) {
const Discord = require('discord.js');
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage('[:x:] | **Please mention a user!**');
    }
    var pat = new Discord.RichEmbed()
      .setColor("#FFFF66")
      .setDescription("**"+message.author.username+"** pats "+member+"")
      .setImage("https://cdn.discordapp.com/attachments/336752911776219138/344055457196933120/giphy_2.gif");

    message.channel.sendEmbed(pat);
  };

  exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [],
  permLevel: 0
  };

  exports.help = {
  name: 'pat',
  description: 'pats the mentioned user )',
  usage: '&pat <@mention>)'
  };
