const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
 var embed = new Discord.RichEmbed();
  embed.setTitle('GalaxyBOT help')
  embed.setDescription('**_For additional help try `&help <cmd>`_**');
  embed.setColor('3447003');
  embed.setThumbnail('https://cdn.discordapp.com/attachments/320909577111470080/327334266037862401/help.png')
  embed.addField('Fun commands', '`8ball`, `cat`, `meme`, `movie`, `tv`, `slots`,  `insult`, `coinflip`, `shame`');
  embed.addField('Info commands', '`about`, `botstats`, `status`, `changelogs`, `help`, `invite`, `roleinfo`. `start`, `ping`, `commands`, `support-server` ')
  embed.addField('Action commands', '`slap`, `poke`, `highfive`, `hug`, `tickle`, `pat`')
  embed.addField('Utility commands', '`urban`, `say`, `stats`, `sinfo`, `hello`')
  embed.addField('Moderation commands', '`kick`, `ban`, `mute`, `warn`, `lockdown`, `unban`')
  embed.addField('Guild owner commands', '`purge`')
  embed.addField('Bot developer commands', '`update`, `update2`, `reload`, `eval`');
  embed.setFooter('There are 42 commands in total.')

  message.channel.sendEmbed(embed);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'cmds',
  description: 'Displays the commands in a modern and eligant format.',
usage: 'GET INFO'
};
