const ballAnswers = require('../jokes.json');
exports.run = function(client, message, args){
  message.channel.sendMessage(':rofl: | Finding you a joke..')
  message.channel.sendMessage(ballAnswers[Math.floor(Math.random() * 15) +1]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'joke',
  description: 'Galaxy will tell you a joke.',
  usage: '-'
};
