const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Galaxy Help')
  embed.setDescription('For more info about a command type **_`&help <cmd name>`_** \n:rofl: | **Fun Commands (Detailed: &fun)**: `yomomma`, `fliptext`, `anime`, `fortune`, `leet`, `catfact`, `piratespeak`, `reverse`, `dog`, `choose`, `joke`, `8ball`, `cat`, `meme`, `movie`, `tv`, `slots`, `insult`, `shame`, `coinflip`\n:hand_splayed::skin-tone-1: | **Action commands (Detailed: &action)**: `slap`, `poke`, `highfive`, `hug`, `tickle`, `pat` \n:information_source: | **Info commands (Detailed: &info)**: `patrons`, `shardinfo`, `credits`, `vote`, `about`, `stats`, `status`, `changelogs`, `cmds`, `invite`, `roleinfo`, `start`, `ping` \n:speaking_head: | **Utility commands**: `reminder`, `poll`, `endpoll`, `avatar`, `userinfo`, `shorten`, `forecast`, `weather`, `wiki`, `google`, `hello`, `discrim`, `urban`, `say`, `sinfo` \n:hammer: | **Moderation commands (Detailed: &mod)**: `kick`, `ban`, `mute`, `unmute`, `textmute`, `textunmute`, `warn`, `lockdown`, `unban` \n:crown: | **Guild Owner commands**: `purge`, `modlog`, `farewell`, `farewellmessage`, `greet`, `greetmessage` \n:musical_note: | **Voice / Music commands (Detailed: &music)**: `youtubesearch`, `play`, `add (yt url only)`, `pause`, `resume`, `skip`, `join`, `time`, `stop` \n:video_game: **Game Stats (more soon)**: `minecraft`, `battlefield4`');
  embed.setColor('#FFD700');
  embed.addField('Patrons <3 (`&patrons`)', "Dr. Taiki#3494 (`312238004653785088`) | $5")
  embed.addField('Detailed help', 'Detailed help can be viewed in the wiki by __**[clicking here.](https://github.com/HasanBrandsXD/GalaxyBOT/wiki/Commands---Setting-up-&-Doc)**__ \nYou can even find the start-up guide in the [website](https://hasanbrandsxd.github.io/galaxy-web)')
  embed.setFooter('We hope you enjoy your day with Galaxy.')

  message.channel.sendEmbed(embed);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
name: 'cmds',
  description: 'View the Galaxy Commands here.',
usage: 'GET INFO'
};
