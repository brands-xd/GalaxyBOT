const table = require('table');
exports.run = function(client, msg, args) {
  client.shard.broadcastEval('[this.shard.id, this.guilds.size, this.users.size, this.channels.size, process.memoryUsage().heapTotal / 1024 / 1024]').then(results => {
    msg.channel.send(`G = Guilds || U = Users || C = Channels || R = RAM \n` + results.map(r => `${client.shard.count} :: G ${r[1]} U ${r[2]} C ${r[3]} R ${r[4].toFixed(2)} MiB`).join('\n'), {code: 'prolog'})})
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'shardinfo',
description: 'SHARD STATS',
usage: 's a r c a s m'
};
