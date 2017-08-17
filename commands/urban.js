const request = require("request");

exports.run = (client, msg, [search, resultNum]) => {
  const baseUrl = "http://api.urbandictionary.com/v0/define?term=";
  const theUrl = baseUrl + search;
  request({
    url: theUrl,
    json: true,
  }, (error, response, body) => {
    if (!resultNum) {
      resultNum = 0;
    } else if (resultNum > 1) {
      resultNum -= 1;
    }
    const result = body.list[resultNum];
    if (result) {
      const definition = [
        `**Requested Word:** ${search}`,
        "",
        `**Urban Defination:** ${resultNum += 1} out of ${body.list.length}\n_${result.definition}_`,
        "",
        `**Examples of requested:**\n${result.example}`,
        `<${result.permalink}>`,
      ];
      msg.channel.sendMessage(definition).catch(err => client.funcs.log(err.stack, "error"));
    } else {
      msg.channel.sendMessage("404 | The requested word was not found in the Urban Dictionary").catch(err => client.funcs.log(err.stack, "error"));
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
  name: 'urban',
  description: 'urbandictionary',
  usage: '-'
};
