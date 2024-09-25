const Discord = require('discord.js')
const marsnpm = require('marsnpm')
const db = require('megadb')
let prefix_db = new db.crearDB("prefixes")
exports.run = async (client, message, args, color) => {
  
let prefix;
if(prefix_db.tiene(`${message.guild.id}`)) {
  prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
  prefix = "("
}
  
let escribir = args.join(' ')               
 const embed = new Discord.RichEmbed()
                       
                        .setAuthor("Jump. | SeDijo [Ejemplo]",  client.user.avatarURL)
                        .setDescription("<a:configurating:652935790846017537> | __**Escribe una palabra corta**__")
                        .setImage("https://i.kym-cdn.com/photos/images/original/001/499/011/bb7.jpeg")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                  
                  if(!escribir) return message.channel.send({embed})
  
let sedijo = args.join(' ');
let img = await marsnpm.sedijo(sedijo)
message.channel.send({files: [img]})
}