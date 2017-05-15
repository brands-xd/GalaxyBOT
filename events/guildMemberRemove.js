module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`${member.user.username} left the server unfortunately, Goodbye ${member.user.username}! We'll miss you!`);
};
