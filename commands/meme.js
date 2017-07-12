const ballAnswers = require('../meme.json');
exports.run = function(client, message, args){
  message.channel.sendMessage(':joy: | Finding you a nice meme...')
  message.channel.sendMessage(ballAnswers[Math.floor(Math.random() * 20) +1]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'meme',
  description: 'Displays some cool memes',
  usage: 'what cud the usage be...?'
};
