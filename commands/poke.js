exports.run = function(client, message, args) {
const Discord = require('discord.js');
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage('[:x:] | **Please mention a user!**');
    }
    var poke = new Discord.RichEmbed()
      .setColor("#FFFF66")
      .setDescription("**"+message.author.username+"** pokes **"+member+"**")
      .setImage("https://cdn.discordapp.com/attachments/322032089526435841/344799258559381504/giphy_4.gif");

    message.channel.sendEmbed(poke);
  };

  exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [],
  permLevel: 0
  };

  exports.help = {
  name: 'poke',
  description: 'pokes the mentioned user )',
  usage: '&poke <@mention> poke)'
  };
