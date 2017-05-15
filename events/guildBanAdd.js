module.exports = (guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} was banned! \nModlogs were sent to JW Marquis Logs.`);
};
