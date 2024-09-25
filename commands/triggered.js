const Weez = require("weez");
var weez = new Weez.WeezAPI("w9suD5t0Hpq125HNjQn7YaiL3vI2H1iESdEd");
let Discord = require('discord.js')
exports.run = async (nearby, message, args, client) => {

  let miembro = message.mentions.users.first()
  let mbed = new Discord.RichEmbed()
                        .setAuthor("Jump. | Triggered [Ejemplo]",  "https://media.giphy.com/media/K4rDu65eHSsNO/giphy.gif")
                        .setDescription("<a:reloco:652545632136986625> | __**Descubre el enfado de una persona**__")
                        .setImage("https://media.giphy.com/media/9svusFTPpZhde/giphy.gif")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
   .setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  
  if (!miembro) return message.channel.send(mbed)
    let img = await weez.triggered(miembro.displayAvatarURL);
     var embed = new Discord.RichEmbed()
     .setAuthor("Jump. | Triggered", "https://media.giphy.com/media/K4rDu65eHSsNO/giphy.gif")
      .setColor("RANDOM")
      .attachFiles([{
        attachment: img,
        name: "img.gif"
      }])
      .setImage("attachment://img.gif")
 .setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
    message.channel.send(embed);
    message.delete().catch(() => {});
}