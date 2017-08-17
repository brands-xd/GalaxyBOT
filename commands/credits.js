const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Galaxy Credits <3')
  embed.setDescription(`**Galaxy's Founder**: *HasanBrandsXD#4120* \n**Galaxy's CoOwner**: *Maya#9410* \n**Galaxy's Developers <3**: \nSmartbunny009#5780 (Head Dev, VPS Mover) \nThomas#3693 (Music Dev)`);
  embed.setColor('#FFD700');
  embed.setThumbnail('https://cdn.discordapp.com/attachments/279965137908137986/300962159373058048/thPPL7H8TZ.jpg')

  message.channel.sendEmbed(embed);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'credits',
description: 'Credits',
usage: 's a r c a s m'
};
