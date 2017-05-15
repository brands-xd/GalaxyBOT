const config = require('../settings.json');

exports.run = function(client, message, args){
  let role = message.guild.roles.find('name', config.deathRole);
  if (!args[0]) {
    if (message.member.roles.has(role.id)) {
      message.member.removeRole(role);
      message.channel.sendMessage(`${message.member} have been brought back to the land of the living and is now alive!`);
    } else {
      message.channel.sendMessage(`${message.member} is already alive.`);
    }
  } else {
    let mention = message.mentions.users.first();
    if (mention && !mention.bot) {
      let member = message.guild.member(mention);
      member.removeRole(role);
      message.channel.sendMessage(`${member.user.toString()} have been brought back to the land of the living and is now alive!`);
    } else {
      message.channel.sendMessage('Cannot revive user. Either a group mention, a bot, or user does not exist');
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'revive',
  description: 'Revive a player and bring them back from hell',
  usage: 'revive <mention user>'
};
