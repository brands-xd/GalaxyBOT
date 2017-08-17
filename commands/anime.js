const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
exports.run = (client, msg, params) => {
    if (params.length < 1) return msg.reply('What should I search for?');
    msg.channel.send("Getting all the beautiful animes...").then(message => {
    kitsu.searchAnime(params.join(" "))
      .then(result => {
          const filter = message => {
            if(message.content === "1" || message.content === "2" || message.content === "3" || message.content === "4" || message.content === "5") {
              return true
            } else {
              return false
            }
          }
          message.edit(`Found cute animes, type in a number between 1-5 to get the results (This is an await message, it'll terminate in 60 seconds)\n1: ${result[0].titles.english}/${result[0].titles.japanese}\n2: ${result[1].titles.english}/${result[1].titles.japanese}\n3: ${result[2].titles.english}/${result[2].titles.japanese}\n4: ${result[3].titles.english}/${result[3].titles.japanese}\n5: ${result[4].titles.english}/${result[4].titles.japanese}`)
          msg.channel.awaitMessages(filter, {
              "max": 20,
              "maxMatches": 1,
              "time": 60000,
              "errors": ['time']
              }
            ).then(message => {
                if (message.size === 0) return
                const number = Number(message.first().content) - 1
				msg.channel.send(`Here's your anime! \n\n**Titles:**\n**Japanese**: ${result[number].titles.japanese}\n**English**: ${result[number].titles.english}\n\n**Show Type**: ${result[number].showType}\n\n**Popularity Rank**: ${result[number].popularityRank}\n\n**Synopsis**: ${result[number].synopsis}`)
              }
            )
            .catch(() => msg.reply("Time's up! 60 seconds are up."))

        }
      )
      .catch(() => {
          message.edit("ehh I could not get the anime, check spelling?")
          msg.react("❓")
          }
        );
      }
    )
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'anime',
  description: 'Searches some anime',
usage: 's a r c a s m'
};
