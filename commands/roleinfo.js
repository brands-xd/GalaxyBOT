exports.run = function(client, message, args){
  message.channel.sendMessage('Information viewed from `config.json` \nAdminRole: GalaxyADMIN \nModRole: Mods \nMuteRole: Muted \nDeathRole: Dead\n(You cannot edit the information viewed above. Only devs can.) \nIn order to moderate you need the Mods role!`');
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
