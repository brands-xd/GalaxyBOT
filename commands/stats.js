
const fs = require('fs');

exports.run = function(client, message, args){
  let stats = JSON.parse(fs.readFileSync('./stats.json', 'utf8'));
  if (!stats[message.author.id]) {
    stats[message.author.id] = {deaths: 0, spins: 0, pulls: 0};
  }
  if (!args[0]) {
    message.channel.sendCode('asciidoc', `= Stats for ${message.member.user.username} = \n\nDeaths   ::  ${stats[message.author.id].deaths}\nSpins    ::  ${stats[message.author.id].spins}\nPulls    ::  ${stats[message.author.id].pulls}`);
  } else {
    let mention = message.mentions.users.first();
    if (mention && !mention.bot) {
      if (!stats[mention.id]) {
        stats[mention.id] = {deaths: 0, spins: 0, pulls: 0};
      }
      message.channel.sendCode('asciidoc', `= Stats for ${mention.username} = \n\nDeaths   ::  ${stats[mention.id].deaths}\nSpins    ::  ${stats[mention.id].spins}\nPulls    ::  ${stats[mention.id].pulls}`);
    } else {
      message.channel.sendMessage('No stats for user. Either a group mention, a bot, or user does not exist');
    }
  }
  fs.writeFile('./stats.json', JSON.stringify(stats), (err) => {
    if (err) {
      console.log(err);
    }
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stats',
  description: 'Display user stats',
  usage: 'stats <mention user>'
};
