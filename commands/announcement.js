exports.run = function(client, message, args){
message.channel.sendMessage('Announcement page was found empty! \n\n_Check back for future updates. . ._');
console.log('DM SENT')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'announcement',
  description: 'BOT sends the latest annoucement in your DMs. [NEW ANNOUNCEMENT]',
  usage: 'Sends a DM to you about the announcements made.'
};
