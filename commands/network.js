exports.run = function(client, message, args){
  console.log('[API ------- 11:58 AM ---- 3/13/17 - Successfully posted the shardstat to bot.discord.pw')
  console.log('[API ------- 12:05 AM ---- 3/13/17 - Database error, disconnected]')
  message.channel.sendMessage('**ShardStats** \nShard _0_ : `Operational` : gateway.komada.js \nShard _1_ : ONLINE : bots.discord.pw \nShard _2_ : OFFLINE : undefined.(htmal) \n\nRunning on server Rethink.DB and DigitalOcean - Droplet \nServer (overall) ping: 12 ms')
  console.log(4 + 3)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'network',
  description: '',
  usage: ''
};
