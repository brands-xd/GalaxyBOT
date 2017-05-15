exports.run = function(client, message, args){
  if (!args[0]){
      return message.channel.sendMessage('There was nothing to say!');
  }
  message.channel.sendMessage(args.join(' '));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Bot will repeat what you say',
  usage: 'say <something for the bot to repeat>'
};
