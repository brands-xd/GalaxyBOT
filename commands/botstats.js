exports.run = function(client, message, args){
 message.channel.sendMessage(`**Bot statistics** \n*This is not a useful command, its just for my owners to check on my stats. :eyes: \n\nGuilds: ${client.guilds.size} \nChannels: ${client.channels.size} \nUsers: ${client.users.size}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botstats',
  description: 'View the bot statistics, this cmd is not useful.',
  usage: '-'
};
