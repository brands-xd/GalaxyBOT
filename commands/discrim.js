const Discord = require('discord.js');
exports.run = function(client, msg) {
   const discrim = msg.content.split(' ')[1]
   if (!discrim) return msg.reply("Whoops! I could not find the discriminator that you had given.")
   if (typeof discrim !== 'integer')
   if (discrim.size < 4) return msg.reply("Don't you know that discrims are 4 numbers? -.-")
   if (discrim.size > 4) return msg.reply("Don't you know that discrims are 4 numbers? -.-")
     let members = client.users.filter(c=>c.discriminator===discrim).map(c=>c.username).join('\n')
     if (!members) return msg.reply("404 | No members have that discriminator!")
   let embed = new Discord.RichEmbed()
     .setTitle("Galaxy Discrim Finder")
     .setDescription("Here are the discriminators I found!")
     .addField("Members:", members)
     .setColor('#008000')
      msg.channel.send({embed: embed})
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
name: 'discrim',
  description: 'Finds the discrim given.',
usage: 'discrim #0000'
};
