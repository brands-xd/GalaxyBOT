exports.run = (client, message, args) => {
  message.reply('Make sure you have the Mods role with `KICK_MEMBERS, BAN_MEMBERS, MANAGE_CHANNEL` perms before you begin with Galaxy Mod-Mode, to know who is your guild admin/owner try `&sinfo` & for more info type `roleinfo`')
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
  if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
  message.guild.unban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'Unbans the user.',
  usage: 'unban [mention] [reason]'
};
