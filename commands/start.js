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
  embed.addField('Step two: Mod commands', 'No roles should be setted up, as a matter of fact, Galaxy will *detect* your perms. If you do not have the perms galaxy will **not** reply.')
  embed.addField('Step three: Setting up farewell message & greet **[OPTIONAL]**', 'To set up a greet channel go to the desired channel and type `&greet`, for greet-messages type [EXAMPLE: `&greetmessage Welcome $user to $server`]. To set up a farewell channel go to the desired channel and type `&farewell`, to set up farewell-messages type in [EXAMPLE: `&farewellmessage Bye $user]`')
  embed.addField('Step four: Setting up a modlog channel', ' Simply go to the desired channel and type `&modlog` which will enable modlog toggle.')
  embed.setFooter('👍 You have now setted up Galaxy, try `&cmds`')
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
