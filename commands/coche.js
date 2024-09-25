const Discord = require('discord.js')
const db = require('mega-dtbs')
let prefix_db = new db.crearDB("prefixes")
exports.run = async (client, message, args, color) => {
  
let prefix;
if(prefix_db.tiene(`${message.guild.id}`)) {
  prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
  prefix = "("
}
  
var Weez = require("weez");
var weez = new Weez.WeezAPI("w9suD5t0Hpq125HNjQn7YaiL3vI2H1iESdEd");
  8

let user = message.mentions.users.first(); 
                  let member = message.mentions.users.first()
                  
                    const embed = new Discord.RichEmbed()
                       
                        .setAuthor("Jump. | Coche [Ejemplo]",  client.user.avatarURL)
                        .setDescription("<a:configurating:652935790846017537> | __**Menciona a otro jugador y el coche elige entre los 2**__")
                        .setImage("https://i.ytimg.com/vi/5NkJ8Hmxo-Q/hqdefault.jpg")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                  
                  if(!member) return message.channel.send({embed})

                  let img = await weez.coche(message.author.displayAvatarURL, member.displayAvatarURL)

                  
  
  message.channel.send(({ files: [img]}));
  
}