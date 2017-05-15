const slotAnswers = require('../slot.json');
exports.run = function(client, message, args){;
  message.channel.sendMessage(slotAnswers[Math.floor(Math.random() * 3) +1]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slot',
  description: 'Play slots in discod!',
  usage: '. . .'
};
