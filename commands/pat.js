exports.run = function(client, message, args) {
const Discord = require('discord.js');
let member = message.guild.member(message.mentions.users.first());
    var pat = new Discord.RichEmbed()
    .setTitle(`You've done a good job, my dear.`)
      .setColor("#FFFF66")
      .setDescription("**"+message.author.username+"** pats  "+member+"")
      .setImage("https://cdn.discordapp.com/attachments/320909154216706048/328090395147763712/giphy_6.gif");

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
