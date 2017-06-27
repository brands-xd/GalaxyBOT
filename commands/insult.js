const ballAnswers = require('../insult.json');
exports.run = function(client, message, args){
  message.channel.sendMessage(':warning: | This could really hurt users feelings so please proceed with caution.')
  message.channel.sendMessage(ballAnswers[Math.floor(Math.random() * 20) +1]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'insult',
  description: 'This cud really hurt users feelings',
  usage: 'what cud the usage be...?'
};
