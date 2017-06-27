exports.run = function(client, message, args) {
const Discord = require('discord.js');
    var highfive = new Discord.RichEmbed()
      .setTitle(':hand_splayed::skin-tone-1: Highfive dude!')
      .setColor("#FFFF66")
      .setDescription('*kek, highfives.*')
      .setImage("https://cdn.discordapp.com/attachments/320909154216706048/328085491734020106/giphy_3.gif");

    message.channel.sendEmbed(highfive);
  };

  exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [],
  permLevel: 0
  };

  exports.help = {
  name: 'highfive',
  description: 'highfives the mentioned user )',
  usage: '&highfive <@mention>)'
  };
