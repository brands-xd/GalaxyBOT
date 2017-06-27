module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome ${member.user.username} to this server! We hope you enjoy your day.`);
};
