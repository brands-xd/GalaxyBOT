
exports.run = function(client, message, args){
  message.channel.sendCode('asciidoc', `\n= Music Commands = \n&youtubesearch :: Searches YouTube for a song. \n&play :: Plays the song in the queue.\n&add :: Adds the song to the queue [YT URL ONLY]\n&pause :: Pauses the song which is currently playing. \n&resume :: Resumes the song which is playing. \n&skip ::  Skips the song in the queue. \njoin :: Galaxy will force join your voicechannel. \n&time :: Shows the dispatcher time. \n&stop :: Stops all the songs in the queue. [Queue cleared]`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ms'],
  permLevel: 0
};

exports.help = {
  name: 'music',
  description: 'Music help',
  usage: '-'
};
