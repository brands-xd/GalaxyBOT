exports.run = function(client, message, args) {
const Discord = require('discord.js');
let member = message.guild.member(message.mentions.users.first());
    var tickle = new Discord.RichEmbed()
    .setTitle('Omg no! hahhaahahahahahaha')
      .setColor("#FFFF66")
      .setDescription("**"+message.author.username+"** tickles  "+member+"")
      .setImage("https://cdn.discordapp.com/attachments/320909154216706048/328089058884714498/giphy_5.gif");

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
