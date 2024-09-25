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
                  let member1 = message.mentions.users.first()
                  
                    const embed = new Discord.RichEmbed()
                       
                        .setAuthor("Jump. | Licencia [Ejemplo]",  client.user.avatarURL)
                        .setDescription("<a:pepepolice:647757858238234625> | __**Menciona a una persona**__")
                        .setImage("https://pm1.narvii.com/6606/28e979bff358bb1bf4b3cce7973185b6d6faf190_hq.jpg")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                  
                  if(!member1) return message.channel.send({embed})
  
let member = message.mentions.users.first() 
let img = await marsnpm.licencia(member.avatarURL, member.username)
message.channel.send({files: [img]})
}