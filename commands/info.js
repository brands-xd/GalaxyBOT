
exports.run = function(client, message, args){
  message.channel.sendCode('asciidoc', `\n= Info Commands = \n&patrons :: Lovers of Galaxy \n&shardinfo :: Shows Shard Statistics & Info \n&credits :: Developers of Ga;axy \n&vote :: Vote for Galaxy! \n&about :: What Am I? \n&stats :: Your Shard info \n&status :: Galaxy Status \n&changelogs :: Changelogs! Whats new added? \n&cmds :: Commands \n&invite :: <3 \n&start :: Start up guide \n&ping :: /sarcasm`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['io'],
  permLevel: 0
};

exports.help = {
  name: 'info',
  description: 'Info help',
  usage: '-'
};
