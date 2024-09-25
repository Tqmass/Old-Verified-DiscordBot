//https://media.discordapp.net/attachments/567306547055558656/590536808715124746/giphy.png

const Discord = require("discord.js")
exports.run = (client, message, args) => {
let mencionado = message.mentions.users.first()
let autor = message.author
let suicidios = ["https://k36.kn3.net/taringa/6/9/0/3/0/1/8/maclater/882.gif",
                     "https://em.wattpad.com/d04c335f04c77b44ce12e5e655097881e22ebe34/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f3933764941697157716b6b7356673d3d2d3237303836323935322e313435383462366335626634616236352e676966?s=fit&w=720&h=720",
                     "https://media1.tenor.com/images/ab0c7c3eafcb0c31f620178403bd2415/tenor.gif?itemid=5615564",
                "https://media1.tenor.com/images/0cc5af7fe418580217f2729465bd99cc/tenor.gif?itemid=9190518",
                "https://media.giphy.com/media/Ew6Ad2350BN9m/giphy.gif",
                "https://thumbs.gfycat.com/CompassionateFrailDutchshepherddog-small.gif",
                "https://thumbs.gfycat.com/DirectBasicFlounder-size_restricted.gif",
                "https://media.giphy.com/media/3ohjVaBTRRR6wvbzEI/giphy.gif",
                "https://media0.giphy.com/media/GdLxsU6nvQoI8/giphy.gif",
                "https://1.bp.blogspot.com/-zwzRPdAylKE/W_ykeMygaTI/AAAAAAAACT4/Alr_UVSOAAIMIRGj4MR1wmjPZMnVueowgCLcBGAs/s1600/giphy.gif",
                "https://66.media.tumblr.com/f1828af5fc8f43314ce4040f82eeca99/tumblr_mrq80h9Ctn1qcl077o4_500.gif",
                "http://pa1.narvii.com/5615/2068153d696cc5da636cb4e97bf8bc65bd1fb5ea_hq.gif",
                "https://spi4.itvnet.lv/upload2/articles/70/706705/images/Corpse-Party-Tortured-28.gif",
                "https://media.giphy.com/media/EcB77Cg8t9Nj5oXjRh/giphy.gif",
                "https://pa1.narvii.com/6576/0eb9f5191193c190b61f73915a735e0e41619592_hq.gif",
                "https://pa1.narvii.com/7006/f8563a53a79549c1921ff270568b5ede36469ae8r1-480-270_hq.gif",
                "https://i.makeagif.com/media/11-17-2015/kedC7c.gif",
                "https://media.giphy.com/media/LuyGkgDgAKjxC/giphy.gif",
          
                ]

var embed = new Discord.RichEmbed()
  .setAuthor("Jump. | Torture", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(`<a:mago:613999663351201813> | **${autor}** ___Se esta torturando___`)
  .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])

  if (!mencionado) return message.channel.send(embed)

    var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | Torture", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(`<a:mago:613999663351201813> | **${autor}** __**Esta torturando a**__ **${mencionado}**`)
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }