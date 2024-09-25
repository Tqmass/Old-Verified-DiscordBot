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
  
let escribir = args.join(' ')               
 const embed = new Discord.RichEmbed()
                       
                        .setAuthor("Jump. | Trump [Ejemplo]",  client.user.avatarURL)
                        .setDescription("<a:configurating:652935790846017537> | __**Escribe lo que quieras que diga Donald Trump**__")
                        .setImage("https://media.discordapp.net/attachments/647686572896157696/653199236883677184/file.jpg?width=400&height=300")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                  
                  if(!escribir) return message.channel.send({embed})
  
var Weez = require("weez");
var weez = new Weez.WeezAPI("w9suD5t0Hpq125HNjQn7YaiL3vI2H1iESdEd");
  
let member = message.mentions.users.first()
let img = await weez.trump(args.join(' '))
message.channel.send({files: [img]})
  
}