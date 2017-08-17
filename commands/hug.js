exports.run = function(client, message, args) {
const Discord = require('discord.js');
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage('[:x:] | **Please mention a user!**');
    }
    var hug = new Discord.RichEmbed()
      .setColor("#FFFF66")
      .setDescription("Aww, **"+message.author.username+"** hugs "+member+"")
      .setImage("https://cdn.discordapp.com/attachments/320909154216706048/328086603471781888/giphy_4.gif");

    message.channel.sendEmbed(hug);
  };

  exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [],
  permLevel: 0
  };

  exports.help = {
  name: 'hug',
  description: 'hugs the mentioned user )',
  usage: '&hug <@mention>)'
  };
