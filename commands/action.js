
exports.run = function(client, message, args){
  message.channel.sendCode('asciidoc', `\n= Action Commands = \n&slap :: Slaps (BAM) the user \n&poke :: Pokes the user so he cannot cross his limits \n&highfive :: Highfives the user (finally some teamwork) \n&hug :: Hugs the user (long time no see?) \n&tickle :: Tickles the user (toatz gay) \n&pat :: Pats the user (nono)`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['an'],
  permLevel: 0
};

exports.help = {
  name: 'action',
  description: 'action help',
  usage: '-'
};
