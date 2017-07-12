const suits = ["♠️", "♦", "♥️", "♠️"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

exports.run = (client, msg, [num]) => {
  const numCards = num;
  const lines = [];

  for (let i = 0; i < numCards; ++i) {
    lines.push(`**${ranks[Math.floor(Math.random() * ranks.length)]}**${suits[Math.floor(Math.random() * suits.length)]}`);
  }

  return msg.channel.send(lines.join(", "));
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'cards',
  description: 'Play cards!',
usage: 'GET INFO'
};
