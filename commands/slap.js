exports.run = function(client, message, args) {
const Discord = require('discord.js');
let member = message.guild.member(message.mentions.users.first());
    var slap = new Discord.RichEmbed()
      .setTitle('Slap! :o')
      .setColor("0x00AE86")
      .setDescription("**"+message.author.username+"** Just slapped "+member+"")
      .setImage("https://cdn.discordapp.com/attachments/320909633990688769/327016088183373824/giphy_1.gif");

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
