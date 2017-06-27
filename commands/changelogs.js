const Discord = require('discord.js');
const green = '10A854';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Galaxy Changelogs')
  embed.setDescription(`Version 1.5.0`);
  embed.setColor('10A854');
  embed.setThumbnail('https://cdn.discordapp.com/attachments/279965137908137986/300962159373058048/thPPL7H8TZ.jpg')
  embed.addField(`New! | :100: The actions' update!`, 'New commands: `&tickle`, `&highfive`, `hug`, `pat`');
  embed.addField(`Build Info`, `1.4.0 -> 1.5.0, ':white_check_mark: **Build was posted on Galaxy Process database on 12:35 PM (Arabian Standard Time) 24/6/17**`);
  embed.addField('Developers', 'HasanBrandsXD#4120, Maya#9410')
  embed.setFooter('Process Changelogs')
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
name: 'changelogs',
  description: 'View the Galaxy changelogs here.',
usage: 'GET INFO'
};
