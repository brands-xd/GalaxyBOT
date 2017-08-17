const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Galaxy Voting Page')
  embed.setDescription(`__**[Spend some time to vote Galaxy ;) Click here.](https://discordbots.org/bot/290048236658622464)**__`);
  embed.setColor('#FFD700');
  embed.setThumbnail('https://cdn.discordapp.com/attachments/279965137908137986/300962159373058048/thPPL7H8TZ.jpg')
  embed.addField('We appreciate it.', `Show some love to Galaxy by voting, everything is free for Galaxy. But here is an optional feature for Galaxy. Help keep Galaxy's Music Mode alive by donating! https://www.patreon.com/galaxybot, thank you so much <3`);

  message.channel.sendEmbed(embed);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'vote',
  description: 'Show Galaxy love here <3',
usage: 'i luv u if u do this '
};
