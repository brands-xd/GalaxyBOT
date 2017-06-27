const Discord = require('discord.js');
const config = require('../settings.json');
var request = require('request');
const green = '#10A854';
const red = '#BA2A29';
const yellow = '#FFFF66';

exports.run = function(client, message, args) {
  if (!args[0]){
    return message.channel.sendMessage('Invalid parameters! \n```&tv <tv show> (eg. hi)```');
  }
  args = args.join(' ');
  var embed = new Discord.RichEmbed();
  var colour;

  getSearchData(args, message, function(searchData) {
    if (searchData.total_results == 0) {
      message.channel.sendMessage('Error 404 | This show was not found.');
    } else {
      getTvData(searchData.results[0].id, message, function(tvData) {
        if (parseFloat(tvData.vote_average)*10 >= 80){
          colour = green;
        } else if (parseFloat(tvData.vote_average)*10 >= 60 && parseFloat(tvData.vote_average)*10 < 80) {
          colour = yellow;
        }else if (parseFloat(tvData.vote_average)*10 < 60){
          colour = red;
        }

        embed.setDescription(`__**[${tvData.name}](https://www.themoviedb.org/tv/${tvData.id})**__`);
        embed.setColor(colour);
        embed.setThumbnail(`https://image.tmdb.org/t/p/w500${tvData.poster_path}`);
        embed.addField('Release Date', `${tvData.first_air_date}`);
        embed.addField('Episodes', `${tvData.number_of_episodes}   - Episodes
${tvData.number_of_seasons}     - Seasons`);
        embed.addField('Rating', `${tvData.vote_average}  -  TheMovieDB User Score`);
        embed.addField('Plot', tvData.overview);
        embed.setFooter('TheMovieDB');

        message.channel.sendEmbed(embed);
      });
    }
  });
};

function getTvData(tvID, message, callback) {
  var tvOptions = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${tvID}`,
    qs: {
      language: 'en-US',
      api_key: config.tmdbKey
    },
    body: '{}'
  };

  request(tvOptions, function (error, response, tvData) {
    if (error || response.statusCode != 200) {
      console.log(error);
      message.channel.sendMessage('There has been an error searching, please try again later.');
      return;
    }
    try{
      tvData = JSON.parse(tvData);
    } catch(e) {
      console.log(e);
      message.channel.sendMessage('There has been an error searching, please try again later.');
      return;
    }
    return callback(tvData);
  });
}

function getSearchData(args, message, callback) {
  var searchOptions = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/tv',
    qs: {
      page: '1',
      query: args,
      language: 'en-US',
      api_key: config.tmdbKey
    },
    body: '{}'
  };

  request(searchOptions, function (error, response, searchData) {
    if (error || response.statusCode != 200) {
      console.log(error);
      message.channel.sendMessage('There has been an error searching, please try again later.');
      return ;
    }
    try{
      searchData = JSON.parse(searchData);
    } catch(error) {
      console.log(error);
      message.channel.sendMessage('There has been an error searching, please try again later.');
      return;
    }
    return callback(searchData);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tv',
  description: 'Search TheMovieDB for tv show information',
  usage: 'tv <tv show>'
};
