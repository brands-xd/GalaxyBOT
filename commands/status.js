exports.run = function(client, message, args){
  message.channel.sendMessage('Statistics can be viewed by this webiste. https://exana.io/s/ar6z6q11wfdeo8aa/public | Powered by Exana.IO');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'status',
  description: 'Status Page',
  usage: 'Find out'
};
