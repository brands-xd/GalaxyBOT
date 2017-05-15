exports.run = function(client, message, args){
  message.channel.sendMessage('Your request was forbidden : 500');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'talk',
  description: 'Now talk with the BOT in DM! (There might be some API error.)',
  usage: '&talk (your message) = BOT responses with the followed AI'
};
