const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Galaxy Help')
  embed.setDescription('For more info about a command type **_`&help <cmd name>`_** \n:rofl: | **Fun Commands**: `joke`, `8ball`, `cat`, `meme`, `movie`, `tv`, `slots`, `insult`, `shame`, `coinflip`\n:hand_splayed::skin-tone-1: | **Action commands**: `slap`, `poke`, `highfive`, `hug`, `tickle`, `pat` \n:information_source: | **Info commands**: `support-server`, `vote`, `about`, `botstats`, `status`, `changelogs`, `cmds`, `invite`, `roleinfo`, `start`, `ping` \n:speaking_head: | **Utility commands**: `hello`, `discrim`, `urban`, `say`, `sinfo` \n:hammer: | **Moderation commands**: `kick`, `ban`, `mute`, `warn`, `lockdown`, `unban` \n:crown: | **Guild Owner commands**: `purge` \n:musical_note: | **Voice / Music commands**: `play`, `add (yt url only)`, `pause`, `resume`, `skip`, `join`, `time`');
  embed.setColor('#FFD700');
  embed.addField('As mentioned earlier, for more information on any commands just type `&help <cmd name>`', 'For example: **_`&help ban`_**')
  embed.setFooter('We hope you enjoy your day with Galaxy.')

  message.channel.sendEmbed(embed);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'test',
  description: 'View the Galaxy Status here.',
usage: 'GET INFO'
};
