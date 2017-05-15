exports.run = function(client, message, args){
  message.channel.sendMessage('Invite me to your server: https://discordapp.com/oauth2/authorize?client_id=290048236658622464&scope=bot&permissions=2081946751 \n`[API] The link was updated successfully according to the CLIENT_ID (Discord Permissions)`');
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
