const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Galaxy Status Page')
  embed.setDescription(`__**[See the original page here.](https://exana.io/s/ar6z6q11wfdeo8aa/public)**__`);
  embed.setColor('#FFD700');
  embed.setThumbnail('https://cdn.discordapp.com/attachments/279965137908137986/300962159373058048/thPPL7H8TZ.jpg')
  embed.addField('BOT', ':white_check_mark: **Operational**');
  embed.addField('Unit 1 (discordbots.org)', ':white_check_mark: **Operational / Connected**');
  embed.addField('Unit 2 (bots.discord.pw)', ':white_check_mark: **Operational / Connected**')
  embed.addField('Server', ':white_check_mark: **Operational**')
  embed.addField('IMDb (&movie)', ':white_check_mark: **Operational**')
  embed.addField('Developers', 'HasanBrandsXD#4120, Maya#9410')
  embed.setFooter('Galaxy Status (https://exana.io/s/ar6z6q11wfdeo8aa/public)')
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
name: 'status',
  description: 'View the Galaxy Status here.',
usage: 'GET INFO'
};
