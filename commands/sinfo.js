exports.run = function(client, message, args){
  const Discord = require('discord.js')
  let guild = message.guild
    const serverEmbed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .setThumbnail(guild.iconURL)
      .setTitle(guild.name)
      .addField("Server Members:", guild.memberCount)
      .addField("Server Owner:", guild.owner)
      .addField("Server Region:", guild.region)
      .addField("Server Roles:", guild.roles.map(r => r.name).join(",  "));

    message.channel.sendEmbed(serverEmbed)
  };

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
  };

  exports.help = {
  name: 'sinfo',
  description: 'Get all the additional info which arent viewed in other commands.',
  usage: 'GET INFO'
  };
