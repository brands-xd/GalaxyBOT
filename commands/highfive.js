exports.run = function(client, message, args) {
const Discord = require('discord.js');
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage(':x: | Please mention a user!');
    }
    var highfive = new Discord.RichEmbed()
      .setTitle(':hand_splayed::skin-tone-1: Highfive dude!')
      .setColor("#FFFF66")
      .setDescription("**"+message.author.username+"** highfives "+member+"")
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
