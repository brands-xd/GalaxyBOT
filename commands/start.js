const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('GalaxyBOT start')
  embed.setDescription(`__**[For more info, click here.](https://github.com/HasanBrandsXD/GalaxyBOT/wiki)**__`);
  embed.setColor('#008000');
  embed.setThumbnail('https://cdn.discordapp.com/attachments/279965137908137986/300962159373058048/thPPL7H8TZ.jpg')
  embed.addField('Step one: Checking the ping', 'Before using Galaxy, it is our highest priority for fast ping, you have to check the ping by `&ping` if the ping is more than 1000 ms that means your shard is down (or dead) to fix this simply re-add Galaxy.');
  embed.addField('Step two: Roles', 'You have to add **3 roles** You will have to add \nMuted - If you have muted someone with `&mute` this role will be given to them. \nMods - This role is needed for the moderation commands you will need to add the following perms: `KICK_MEMBERS`, `BAN_MEMBERS` `MANAGE_CHANNEL`. \NGalaxyADMIN - This role is for guild owner they should have **ALL** perms.');
  embed.addField('Important Note:', 'if you want an modern design of it type `&cmds` if you want additional help for a command  try **&help <cmd>**')
  embed.setFooter(`You have successfully completed Galaxy's setup. Now try &cmds`)
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
name: 'start',
  description: 'View the Galaxy start here.',
usage: 'GET INFO'
};
