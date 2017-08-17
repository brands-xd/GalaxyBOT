const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Shard Info & Stats')
  embed.setDescription(`Your guild is on: Shard **${client.shard.id}** \nYour shard has: **${client.guilds.size}** guilds. \n*I am connected to your shard with a ping of ${client.ping} ms*`);
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
name: 'stats',
description: 'SHARD STATS',
usage: 's a r c a s m'
};
