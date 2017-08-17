
exports.run = function(client, message, args){
  message.channel.sendCode('asciidoc', `\n= Fun Commands = \n&yomomma :: Tells a yomomma joke. \n&fliptext :: Flips the given text. \n&anime :: Gets beautiful animes from Kitsu \n&fortune :: Tells your fortune [no, really.] \n&leet :: L33TS the text \n&catfact :: #CatsAreCool \n&piratespeak :: Galaxy will turn into a pirate. \n&reverse :: siht \n&dog :: Shows a cute doggo\n&choose :: Galaxy will turn into a lord. \n&joke :: #UnfunnyJokes \n&8ball :: Teh magic 8ball is here! \n&cat :: Cute Cats <3 \n&meme :: This has bad m3m3s. \n&movie :: Searches IMDb for a movie \n&tv :: TV Shows \n&slots :: Plays slots! [no reward ;<] \n&insult :: GO AWAY PEOPLE \n&shame :: Shame, shame.`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['f'],
  permLevel: 0
};

exports.help = {
  name: 'fun',
  description: 'fun help',
  usage: '-'
};
