exports.run = (client, msg, [user]) => {
  return msg.channel.send(`🔔 SHAME 🔔 ${user} 🔔 SHAME 🔔`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'shame',
  description: 'Rings the shamebell on the mentioned user.',
  usage: 'shame <mention>'
};
