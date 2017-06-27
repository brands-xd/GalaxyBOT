exports.run = function(client, message, args) {
const Discord = require('discord.js');
let member = message.guild.member(message.mentions.users.first());
    var hug = new Discord.RichEmbed()
      .setTitle('Awww, what a love story!')
      .setColor("#FFFF66")
      .setDescription("**"+message.author.username+"** hugs <3 "+member+"")
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
