const snekfetch = require('snekfetch');
const prettyLog = require('prettyconsole');
exports.run = async (client, msg) => {
    const guilds_size = await client.shard.broadcastEval("this.guilds.size").then(v => v.reduce((a, b) => a + b, 0))
    console.log('updates status');
    snekfetch.post(`https://bots.discord.pw/api/bots/290048236658622464/stats`)
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIyNTU3NTA2OTA3ODQxNDk1MDQiLCJyYW5kIjo2NDMsImlhdCI6MTUwMTU5MjA1Nn0.y-IVLqomQP-UJfOv2u3xOL-qOpi1aTR-mQBYUeZDxso')
        .send({
            'server_count': guilds_size,
            'shard_count': client.shard.count
        })
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