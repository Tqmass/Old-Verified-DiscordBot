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
let user = message.mentions.users.first(); 
                  let member1 = message.mentions.users.first()
                  
                    const embed = new Discord.RichEmbed()
                       
                        .setAuthor("Jump. | QuieroEso [Ejemplo]",  client.user.avatarURL)
                        .setDescription("<a:configurating:652935790846017537> | __**Menciona a alguien diciendo que lo quieres**__")
                        .setImage("https://media.discordapp.net/attachments/595203556487725087/653164494146633749/file.jpg?width=240&height=300")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                  
                  if(!member1) return message.channel.send({embed})

  
let member = message.mentions.users.first() 
let img = await marsnpm.eso(member.avatarURL)
message.channel.send({files: [img]})
}