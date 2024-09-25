const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://media2.giphy.com/media/ZLxRWG0vhzpiE/giphy.gif",
                     "https://media2.giphy.com/media/1yjaiH3tUlWSAsMGYv/giphy.gif",
                     "https://media.giphy.com/media/HS0O6aPjL6Fy/giphy.gif",
                "https://media1.tenor.com/images/2118209d445e17b16ee77a2d81b5ed70/tenor.gif?itemid=11042053",
                 "https://thumbs.gfycat.com/UglyWhichCuttlefish-size_restricted.gif",
                 "https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif",
                 "https://media1.tenor.com/images/a244b767b004b4a4eb3ae7779075c787/tenor.gif?itemid=5733270",
                 
                 "http://i.imgur.com/tRD1Y.gif",
                 "https://media1.tenor.com/images/4b45fc5ce39673b9ed0ee1fdcf9fa34f/tenor.gif?itemid=7511275",
                 "https://media1.tenor.com/images/841f47c740431035dcd1e715a085da7b/tenor.gif?itemid=10990219",
                 "https://thumbs.gfycat.com/ImmediateRepentantIberiannase-size_restricted.gif",
                 "https://i.pinimg.com/originals/24/3e/2f/243e2f0cf4ad9ef9fb9def7594ec2c85.gif",
                 "https://data.whicdn.com/images/190027766/original.gif",
                 "https://data.whicdn.com/images/145617644/original.gif",
                 "https://66.media.tumblr.com/a7b0a11fe76f51a6366015e1331a6acd/tumblr_o6gqa0HRfv1vsfspjo1_400.gif", 
                 "https://66.media.tumblr.com/bb997846cf0a6e3876c456d9625c1d19/tumblr_o2xrpdJfyq1uprh6zo1_400.gif",
                 "https://media0.giphy.com/media/AebNPktTHrdYc/giphy.gif",                  
                 "https://thumbs.gfycat.com/DrearyDenseFlicker-size_restricted.gif",
                 "https://media1.tenor.com/images/2d2b089dd0e14d3481f898b84bb5c727/tenor.gif?itemid=10481860",
                 "https://i.kym-cdn.com/photos/images/newsfeed/001/372/573/651.gif",
                 "https://i.pinimg.com/originals/ca/dd/f1/caddf1ef532d286996080f27f71f87d2.gif",
                 "https://media1.tenor.com/images/7175fe4b5e789b94b41a793e2fd4db3d/tenor.gif",
                 "https://i.pinimg.com/originals/df/c5/a9/dfc5a93bf1752724471b9137305f42f6.gif",
                 "https://i.gifer.com/Q8O.gif",
                 "https://thumbs.gfycat.com/EvergreenSociableAnemonecrab-size_restricted.gif",                 
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLK5Gb38MNA7pZdEMkQ6sWBtPS45OszBkIZU0W-7tXbVyPje4",
                 "https://i.pinimg.com/originals/92/8c/d7/928cd76c937e2f4c6d998651c2c88d58.gif",
                 "https://uploads.disquscdn.com/images/f804b8da01f1b0f6dcd1a8c0e6a91d804ff96d8182c4b1310f61cd9ca9c240d7.gif",
                 "https://data.whicdn.com/images/253705201/original.gif",
                 "https://i.gifer.com/3TGw.gif",
                 "http://cdn.lowgif.com/full/99530e6f5294716f-anime-sleeping-gif-6-gif-images-download.gif",
                ]

let mencionado = message.mentions.users.first()
let autor = message.author
    var embed1 = new Discord.RichEmbed()
   .setAuthor("Jump. | Sleep", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('<:homerangry:647764365898022912> | __**'+ autor +'**__ | __**Esta durmiendo**__')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
  
if (!mencionado) return message.channel.send(embed1)
  
  const embed = new Discord.RichEmbed()
  .setDescription(`<a:flecha2:652545426054053920> | **${autor}** __Esta durmiendo con__ **${mencionado}** `)
  .setColor("RANDOM")
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
  
  message.channel.send(embed);
}