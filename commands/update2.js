const snekfetch = require('snekfetch');
const prettyLog = require('prettyconsole');
exports.run = (client, msg) => {
  msg.channel.sendMessage('Updated bots.discord.pw status for Galaxy | Error(s)  : - - -')
    console.log('updates status');
    snekfetch.post(`https://bots.discord.pw/api/bots/290048236658622464/stats`)
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIyNTU3NTA2OTA3ODQxNDk1MDQiLCJyYW5kIjoxNzMsImlhdCI6MTQ5NTM3NjE0NH0.eUmedfAOPaCymRXQUDBAlkSszMY8iJh3P070V1LkdlE')
        .send({ server_count: client.guilds.size })
        .then(console.log('Updated pwbots.org status.'))
}

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 4,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
    name: "update2",
    description: "",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};
