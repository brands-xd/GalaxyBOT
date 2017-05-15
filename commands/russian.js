const config = require('../settings.json');
const fs = require('fs');
var bullet = 0;

exports.run = function(client, message, args){
  if (!args[0]){
      return message.channel.sendMessage('Please load, spin or pull.');
  }
  let stats = JSON.parse(fs.readFileSync('./stats.json', 'utf8'));
  let chamber = 1;
  if (args[0] == 'load') {
    if (bullet == 0) {
      bullet = Math.floor(Math.random() * 6) + 1;
      message.channel.sendMessage('Loading bullet...');
    } else if (bullet > 0) {
      message.channel.sendMessage('Bullet already loaded...');
    }
  }
  if (args[0] == 'pull') {
    if (bullet > 0) {
      if (bullet == chamber) {
        message.channel.sendMessage('BANG!');
        stats[message.author.id].pulls++;
        stats[message.author.id].deaths++;
        let role = message.guild.roles.find('name', config.deathRole);
        if (role) {
          if (message.member.roles.has(role.id)) {
            message.channel.sendMessage(`${message.member} is already dead but somehow manages to shoot themselves anyway. Must be a zombie?`);
          } else {
            message.member.addRole(role).catch(console.error);
            message.channel.sendMessage(`${message.member}s brains explode! Rest in peace.`);
            setTimeout(function() {
              message.channel.sendMessage(`${message.member} has risen from the dead!`);
              message.member.removeRole(role).catch(console.error);
            }, 600000);
          }
        } else {
          message.channel.sendMessage('No Death role. Please add Death role and update config.');
        }
        bullet -= 1;
      } else {
        stats[message.author.id].pulls++;
        message.channel.sendMessage('CLICK!');
        bullet -= 1;
      }
    } else {
      message.channel.sendMessage('Please load the gun...');
    }
  }
  if (args[0] == 'spin') {
    if (bullet > 0){
      bullet = Math.floor(Math.random() * 6) + 1;
      stats[message.author.id].spins++;
      message.channel.sendMessage('Spinning chamber...');
    } else {
      message.channel.sendMessage('Please load the gun...');
    }
  }
  fs.writeFile('./stats.json', JSON.stringify(stats), (err) => {
    if (err) {
      console.log(err);
    }
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'russian',
  description: 'Play Russian Roulette',
  usage: 'russian <spin>. russian <load>. Russian <pull>.'
};
