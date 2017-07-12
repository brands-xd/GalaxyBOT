const Discord = require('discord.js');
const fs = require('fs');
exports.run = function(client, message, args) {
  function clean(text) {
    if (typeof(text) === 'string')
    return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    else
    return text;
  }
  let cont = message.content.split(' ').slice(1).join(' ');
  message.delete()
    message.channel.send(`please stand by...`).then(mes => {
    try {
      let code = args.join(' ');
      let evaled = eval(code);
      if (typeof evaled !== 'string')
      evaled = require('util').inspect(evaled);
      if(evaled.length > 2000) {
        try {
          let evalcode1 = new Discord.RichEmbed()
          .setAuthor(`Eval by wesselgame(PassTheWessel)`, `https://images-ext-1.discordapp.net/eyJ1cmwiOiJodHRwczovL2F2YXRhcnMyLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzI5MTg0MzM0P3Y9MyJ9.1hE_-fCyecVVS3vcd95AJhVMg7o`)
          .addField(`Input:`, `\`\`\`js\n${cont}\`\`\``, true)
          .addField(`Output:`, `\`\`\`js\nOutput too long, logged to \\eval.txt\`\`\``, true)
          .setColor(0x00FF00)
          .setFooter(`Node.js - Time taken: ${Date.now() - message.createdTimestamp} ms`, `https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Euc2FmZS5tb2UvVUJFVWwucG5nIn0.LbWCXwiUul3udoS7s20IJYW8xus`)
          fs.writeFile(`eval.txt`, `${clean(evaled)}`)
           return mes.edit({embed : evalcode1});
        } catch(err) {
          errorcode1 = new Discord.RichEmbed()
          .setAuthor(`Eval by wesselgame(PassTheWessel)`, `https://images-ext-1.discordapp.net/eyJ1cmwiOiJodHRwczovL2F2YXRhcnMyLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzI5MTg0MzM0P3Y9MyJ9.1hE_-fCyecVVS3vcd95AJhVMg7o`)
          .addField(`Input:`, `\`\`\`js\n${cont}\`\`\``, true)
          .addField(`Output:`, `\`\`\`js\nOutput too long, logged to \\eval.txt\`\`\``, true)
          .setColor(0xFF0000)
          .setFooter(`Node.js - Time taken: ${Date.now() - message.createdTimestamp} ms`, `https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Euc2FmZS5tb2UvVUJFVWwucG5nIn0.LbWCXwiUul3udoS7s20IJYW8xus`)
          fs.writeFile(`eval.txt`, `${clean(err)}`)
          return mes.edit({embed : errorcode1});
        }
      }
      evalcode = new Discord.RichEmbed()
      .setAuthor(`Eval by wesselgame(PassTheWessel)`, `https://images-ext-1.discordapp.net/eyJ1cmwiOiJodHRwczovL2F2YXRhcnMyLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzI5MTg0MzM0P3Y9MyJ9.1hE_-fCyecVVS3vcd95AJhVMg7o`)
      .addField(`Input:`, `\`\`\`js\n${cont}\`\`\``, true)
      .addField(`Output:`, `\`\`\`js\n${clean(evaled)}\`\`\``, true)
      .setColor(0x00FF00)
      .setFooter(`Node.js - Time taken: ${mes.createdTimestamp - message.createdTimestamp.toFixed()} ms`, `https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Euc2FmZS5tb2UvVUJFVWwucG5nIn0.LbWCXwiUul3udoS7s20IJYW8xus`)
      mes.edit({embed : evalcode});
    } catch (err) {
      errorcode = new Discord.RichEmbed()
      .setAuthor(`Eval by wesselgame(PassTheWessel)`, `https://images-ext-1.discordapp.net/eyJ1cmwiOiJodHRwczovL2F2YXRhcnMyLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzI5MTg0MzM0P3Y9MyJ9.1hE_-fCyecVVS3vcd95AJhVMg7o`)
      .addField(`Input:`, `\`\`\`js\n${cont}\`\`\``, true)
      .addField(`Output:`, `\`\`\`js\n${clean(err)}\`\`\``, true)
      .setColor(0xFF0000)
      .setFooter(`Node.js - Time taken: ${mes.createdTimestamp - message.createdTimestamp.toFixed()} ms`, `https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Euc2FmZS5tb2UvVUJFVWwucG5nIn0.LbWCXwiUul3udoS7s20IJYW8xus`)
      mes.edit({embed : errorcode});
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'fuck',
  usage: '-'
};
