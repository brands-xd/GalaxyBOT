exports.run = function(client, message, args) {
const Discord = require('discord.js');
let member = message.guild.member(message.mentions.users.first());
    var poke = new Discord.RichEmbed()
      .setTitle('Poke! :o')
      .setColor("#FFFF66")
      .setDescription("**"+message.author.username+"** Just poked "+member+"")
      .setImage("https://cdn.discordapp.com/attachments/317393617201135617/327360903647330304/source.gif");

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
