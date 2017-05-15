exports.run = function(client, message, args){
  message.channel.sendMessage('`Reloading .json and .js files. . .`');
  message.channel.sendMessage('`Restarting bot, Updated .setgame file.`');
  message.channel.sendMessage('`Success! If some commands still dont work please try &reload again.`');
  console.log('The command restart.js was occured in a gui;d.')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'restart',
  description: 'Reload all the .json and the .js files (Bot admin approval  required.)',
  usage: 'Reloads all .json or .js files if updated.'
};
