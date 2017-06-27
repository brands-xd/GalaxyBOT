const hello = require('../lang.json');
exports.run = function(client, message, args){
  message.channel.sendMessage(hello[Math.floor(Math.random() * 15) +1]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hello',
  description: 'Galaxy will say hello in 15 different languages',
  usage: '-'
};
