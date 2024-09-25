const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://media1.tenor.com/images/609e6c8a28163bd208cc15076e912fcc/tenor.gif?itemid=10183056",
                "https://media3.giphy.com/media/lyErXniEPsQN2/giphy.gif",
                "https://media1.giphy.com/media/3o6MbahoMCwtqD94QM/giphy.gif",
                "https://vignette.wikia.nocookie.net/worldtrigger/images/5/58/Arashiyama_Teleport.gif/revision/latest?cb=20160423132241",
                "https://media1.tenor.com/images/87923232b0948e2e0824c51c048c5f8e/tenor.gif?itemid=8557751",
                "https://media1.giphy.com/media/cpDLETVejaRGw/source.gif",
                "https://media1.tenor.com/images/0c6073b6187a33961913785afb17fa8b/tenor.gif?itemid=8281628",
                "https://media1.tenor.com/images/e81ce2586db0f6ab36c25f9f533ed8ac/tenor.gif?itemid=5155252",
                "https://31.media.tumblr.com/de9e5362596d60dd56ce8591b4a0c8c1/tumblr_n8kde8JNJV1ttu8odo1_500.gif",
                "https://67.media.tumblr.com/4362aa42db65b4ac15ab975f2cd6a867/tumblr_nqmaxz1QWn1twyezqo1_400.gif",
                "http://ekladata.com/OvDQDicDEQ5kTElD_JRaYpjZISg.gif",
                "https://i.kym-cdn.com/photos/images/newsfeed/000/716/642/1c0.gif",
                "http://pa1.narvii.com/6417/24430dccce058a40ccaa310e5d6f353418b24d71_00.gif",
                "https://media0.giphy.com/media/UsNpkIXJMpPMY/giphy.gif",
                "https://i.makeagif.com/media/10-28-2015/x1WplD.gif",
                "https://vignette.wikia.nocookie.net/rwby/images/1/17/Kuroko_teleport_hug.gif",
                "https://media1.tenor.com/images/99e62b7388165e631d2c4e7d546112fb/tenor.gif?itemid=12214141",
                "https://vignette.wikia.nocookie.net/tokyoesp/images/d/da/Teleportation_Manipulation.gif",
                "https://vignette.wikia.nocookie.net/tokyoesp/images/c/c5/Kobushi_turns_invisible.gif",

                ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | Teleport ", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('**'+ message.author +' Se Teletransporto a otro lugar.**')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }