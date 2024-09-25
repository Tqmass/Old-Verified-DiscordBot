const Discord = require('discord.js')
const marsnpm = require('marsnpm')
const db = require('mega-dtbs')
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
                       
                        .setAuthor("Jump. | Mind [Ejemplo]",  client.user.avatarURL)
                        .setDescription("<a:configurating:652935790846017537> | __**Escribe una palabra corta**__")
                        .setImage("https://i.kym-cdn.com/photos/images/original/001/346/065/d4d.png")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                  
                  if(!escribir) return message.channel.send({embed})
  
let member = message.mentions.users.first() 
let img = await marsnpm.mind(args.join(' '))
message.channel.send({files: [img]})
}