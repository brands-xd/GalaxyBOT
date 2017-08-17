const snekfetch = require('snekfetch');
const prettyLog = require('prettyconsole');
exports.run = async (client, msg) => {
    const guilds_size = await client.shard.broadcastEval("this.guilds.size").then(v => v.reduce((a, b) => a + b, 0))
    console.log('updates status');
    snekfetch.post(`https://discordbots.org/api/bots/290048236658622464/stats`)
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI1NTc1MDY5MDc4NDE0OTUwNCIsImlhdCI6MTUwMDM5NDY4MH0.xer0u8vQtKb8uog5I8y_QVenrbFecl-lFYdyhi9fl_c')
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
    name: "update",
    description: "",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};