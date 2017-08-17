exports.run = function(client, message, args) {
const Discord = require('discord.js');
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage(':x: | Please mention a user!');
    }
    var tickle = new Discord.RichEmbed()
    .setTitle('Omg no! hahhaahahahahahaha')
      .setColor("#FFFF66")
      .setDescription("**"+message.author.username+"** tickles  "+member+"")
      .setImage("https://cdn.discordapp.com/attachments/334144617098248192/342217329658167298/giphy_1.gif");

    message.channel.sendEmbed(tickle);
  };

  exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [],
  permLevel: 0
  };

  exports.help = {
  name: 'tickle',
  description: 'tickles the mentioned user )',
  usage: '&tickle <@mention>)'
  };
