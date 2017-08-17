const { ShardingManager } = require('discord.js')
const chalk = require('chalk');
const config = require('./settings.json');
const shard = new ShardingManager('./bot.js', {
  token: config.token,
  totalShards: 'auto'
});
module.exports = client => {
  client.user.setGame('Connecting...');
};

shard.spawn();

shard.on('launch', shard => {
   console.log(chalk.red(`Logging in ${shard.id}`))
   console.log(chalk.green(`Successfully logged in ${shard.id}`))
});