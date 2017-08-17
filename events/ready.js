const config = require('../settings.json');

module.exports = client => {
  console.log(`PROCESS ON ${client.guilds.size}`)
  client.user.setGame(`&cmds | &invite [${client.shard.id}]`);
};
