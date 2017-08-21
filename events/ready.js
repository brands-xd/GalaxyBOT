const config = require('../settings.json');
const games = require('../games.json');


module.exports = client => {
  console.log(`PROCESS ON ${client.guilds.size}`)
  client.user.setPresence({ game: { name: `&cmds | &invite | [${client.shard.id}]`, type: 0 } });  
};
