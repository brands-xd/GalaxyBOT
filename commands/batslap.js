// Kill me please if you know how to fix these please DM me,
// (node:4) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2): Error: Bad Request
// York please view bot.js too, maybe the error is coming from there.

const Discord = require("discord.js");
const { MessageAttachment } = require("discord.js");

exports.run = async (client, message) => { 
    const user = (message.mentions.users.first() || message.author);
    await message.channel.send(new MessageAttachment(
      await client.API.batSlap(message.author.displayAvatarURL, user.displayAvatarURL), "batslap.png"));
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
    name: "pls",
    description: "",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};
