const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Viewing support server; Updated')
  embed.setDescription('Invite link : https://discord.gg/fZEcqgE');
  embed.setColor('#FF0000')

  message.author.sendEmbed(embed);
  message.channel.sendMessage('I have sent the invite link in your DMs!')
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'support-server',
description: 'Views the support server',
usage: 'Any enquiry or help try the command for joining the support server.'
};
