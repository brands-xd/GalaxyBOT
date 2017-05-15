exports.run = (client, message) => {
  message.channel.sendMessage('**Bringing the ball**')
    .then(msg => {
      msg.edit(`Okay, _Pong!_ :ping_pong: (It took: ${msg.createdTimestamp - message.createdTimestamp}ms to bring the ball!)`);
      message.author.addReaction(':ping_pong:')
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping/Pong command. I wonder what this does? /sarcasm',
  usage: 'ping'
};
