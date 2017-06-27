const snekfetch = require('snekfetch');
const prettyLog = require('prettyconsole');
exports.run = (client, msg) => {
  msg.channel.sendMessage('Updated discordbots.org status for Galaxy | Error(s)  : - - -')
    console.log('updates status');
    snekfetch.post(`https://discordbots.org/api/bots/290048236658622464/stats`)
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI1NTc1MDY5MDc4NDE0OTUwNCIsImlhdCI6MTQ5NDg1ODQxOH0.Qs3jXhqtuoYeClmX3MSyDtWA-9sJ5IafTecUm6CN0jE')
        .send({ server_count: client.guilds.size })
        .then(console.log('Updated dbots.org status.'))
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
    name: "update",
    description: "",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};
