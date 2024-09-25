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
let user = message.mentions.users.first(); 
                  let member = message.mentions.users.first()
                  
                    const embed = new Discord.RichEmbed()
                       
                        .setAuthor("Jump. | Rainbow [Ejemplo]",  client.user.avatarURL)
                        .setDescription("<a:configurating:652935790846017537> | __**Menciona a alguien**__ \n \n \n · ___Recuerda que debe de estar en este servidor___")
                        .setImage("https://media3.giphy.com/media/REoKXuuCVu02A/source.gif")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                  
                  if(!member) return message.channel.send({embed})
  
var Weez = require("weez");
var weez = new Weez.WeezAPI("w9suD5t0Hpq125HNjQn7YaiL3vI2H1iESdEd");
  
let img = await weez.rainbow(user.avatarURL)
message.channel.send({files: [img]})
}