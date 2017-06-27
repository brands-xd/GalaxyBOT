exports.run = (client, msg) => {
  return msg.reply(`you flipped ${Math.random() > 0.5 ? "Heads" : "Tails"}.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'coinflip',
  description: 'Flips a coin! (heads or tails)',
  usage: 'coinflip'
};
