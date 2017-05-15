const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('About Galaxy')
  embed.setDescription('Hi. I am **GalaxyBOT**, I am here to entertain, moderate and make your Discord more easier and reliable. My commands can be viewed by the **_&help_** command. \nHere are some examples of my Fun-Commands: \n:8ball: Interactive 8ball \n:robot: CleverBot/talk \n:rosette: Fun slots. \n\nOr even **Moderation**. \n-Kick \n-Mute \n-Ban \n-Moderation logs \nLock-down and more!');
  embed.setColor('008000');
  embed.setThumbnail('https://cdn.discordapp.com/attachments/279965137908137986/300962159373058048/thPPL7H8TZ.jpg')
  embed.addField('Uptime in mili-seconds', `${client.uptime}`);
  embed.addField('Discriminator', 4924);
  embed.addField('Guilds', 'Serving 124 guilds.')
  embed.addField('Shard(s)', 'error')
  embed.addField('Commands', '22')
  embed.addField('Developers', 'HasanBrandsXD#4120, Scuzz#0709')
  embed.addField(':copyright: JW Marquis Bots. All right reserved.', 'Marquis bots are a copyright to JW Marquis.')
  embed.addField('Made in Dubai, United Arab Emirates', 'Locations are subject to copyright.')
  embed.setTimestamp()

  message.channel.sendEmbed(embed);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'about',
description: 'Get all the additional info which arent viewed in other commands.',
usage: 'GET INFO'
};
