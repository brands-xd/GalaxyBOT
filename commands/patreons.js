const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Patrons  <3')
  embed.setDescription("Dr. Taiki#3494 (`312238004653785088`) | $5 \nWhy don't you go ahead and become a patron by [clicking here](https://patreon.com/galaxybot)");
  embed.setColor('#008000');

  message.channel.sendEmbed(embed);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'patrons',
description: 'lovers',
usage: 's a r c a s m'
};
