const Discord = require('discord.js');
const green = '10A854';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Galaxy Changelogs')
  embed.setDescription(`!! Version 2.0.0 !!`);
  embed.setColor('10A854');
  embed.setThumbnail('https://cdn.discordapp.com/attachments/279965137908137986/300962159373058048/thPPL7H8TZ.jpg')
  embed.addField(`New! | Reminders!`, 'New commands: `&reminder`')
  embed.addField('Changelog description:', 'Now Galaxy will remind you of certain things! For example `&reminder -d 10m30s Get back to work.`, to cancel the reminder type `&reminder --cancel`. Enjoy Galaxy!')
  embed.addField(`Build Info`, `1.9.0_2 -> 2.0.0, ':white_check_mark: **Build was posted on Galaxy Process database on 3:46 PM (Arabian Standard Time) 28/7/17**`);
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
