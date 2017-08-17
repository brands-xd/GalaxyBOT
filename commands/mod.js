
exports.run = function(client, message, args){
  message.channel.sendCode('asciidoc', `\n= Moderation Commands = \n&kick :: Kicks the member¯\_(ツ)_/¯ \n&ban :: Bans the member ¯\_(ツ)_/¯ \n&mute :: Voice mutes the user. \n&unmute :: Voice unmutes the user. \n&textmute :: Text mutes the member. \n&textunmute :: Text unmutes the user. \n&warn :: Warns the user so he shuts his big fat mouth. \n&lockdown :: Locksdown the channel so users cant speak. \n&unban :: Unbans the user.`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['md'],
  permLevel: 0
};

exports.help = {
  name: 'mod',
  description: 'Mod help',
  usage: '-'
};
