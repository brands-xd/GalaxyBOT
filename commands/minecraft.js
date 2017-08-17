exports.run = function(client, message, args){
 message.channel.sendMessage(`:video_game: | Finding **Game Stats** for minecraft..`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'minecraft',
  description: 'Gives information of requested IP & Port',
  usage: 'minecraft <SERVER_IP>:<PORT>'
};
