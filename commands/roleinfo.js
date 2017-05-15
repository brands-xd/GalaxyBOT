exports.run = function(client, message, args){
  message.channel.sendMessage('Information viewed from `config.json` \nAdminRole: Bot Developer \nModRole: Moderator \n(You cannot edit the information viewed above. Only devs can.) \nIn order to moderate you need the Moderator role!`');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roleinfo',
  description: 'Views role info according to config.json',
  usage: 'For additional info'
};
