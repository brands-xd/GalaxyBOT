const Discord = require('discord.js');
exports.run = function(client, message, args) {
 message.channel.sendMessage('Aww, your inviting me? <3')
 message.channel.sendMessage(`**Invite link**: https://discordapp.com/oauth2/authorize?client_id=290048236658622464&scope=bot&permissions=2081946751 \n**Support server**: https://discord.gg/u9D6GQq \n*Be sure to join the support server!*`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'By this command, You can view the invite link for me.',
  usage: 'Invite me to your server'
};
