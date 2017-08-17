const ballAnswers = require('../8ball.json');
exports.run = function(client, message, args){
  if (!args[0]){
      return message.channel.sendMessage('May I help you in any way? **To view my commands you can type-in `&cmds`**');
  }
  message.channel.sendMessage(ballAnswers[Math.floor(Math.random() * 20) +1]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Ask the magic 8 ball a question!',
  usage: '8ball <question>'
};
