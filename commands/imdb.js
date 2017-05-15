const Discord = require('discord.js');
var request = require('request');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(client, message, args) {
  if (!args[0]){
      return message.channel.sendMessage('Please enter a search term. (example: Star Wars)');
  }
  args = args.join('+');
  var colour;
  var embed = new Discord.RichEmbed();
  let url = `http://www.omdbapi.com/?t=${args}&y=&plot=short&r=json`;
  request(url, function (error, response, filmData) {
    if (error) {
      console.log(error);
      message.channel.sendMessage('There has been an error searching, please try again later.');
      return ;
    }
    if (response.statusCode != 200) {
      return message.channel.sendMessage('There has been an error searching, please try again later.');
    }
    try{
      filmData = JSON.parse(filmData);
    } catch(e) {
      console.log(e);
      message.channel.sendMessage('There has been an error searching, please try again later.');
      return;
    }
    if (parseFloat(filmData.imdbRating)*10 >= 80){
      colour = green;
    }
    if (parseFloat(filmData.imdbRating)*10 >= 60 && parseFloat(filmData.imdbRating)*10 < 80) {
      colour = yellow;
    }
    if (parseFloat(filmData.imdbRating)*10 < 60){
      colour = red;
    }
    if ('Error' in filmData) {
      message.channel.sendMessage(filmData.Error);
    } else {
      embed.setDescription(`__**[${filmData.Title}](http://www.imdb.com/title/${filmData.imdbID}/)**__`);
      embed.setColor(colour);
      embed.setThumbnail(filmData.Poster);
      embed.addField('Genre', filmData.Genre);
      embed.addField('Rating', `${filmData.Metascore}   - Meta Score
  ${filmData.imdbRating}  - IMDB Rating`);
      embed.addField('Plot', filmData.Plot);

      message.channel.sendEmbed(embed);
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
  name: 'imdb',
  description: 'Search IMDB for film information',
  usage: 'imdb <film>'
};
