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

  let user = message.mentions.users.first(); 
                  let member1 = message.mentions.users.first()
                  
                    const embed = new Discord.RichEmbed()
                       
                        .setAuthor("Jump. | Wasted [Ejemplo]",  client.user.avatarURL)
                        .setDescription("<a:pepepolice:647757858238234625> | __**Menciona a una persona que quieras eliminar**__")
                        .setImage("https://media.discordapp.net/attachments/647686572896157696/653198278598590470/file.jpg?width=300&height=300")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                  
                  if(!member1) return message.channel.send({embed})
  
  
var Weez = require("weez");
var weez = new Weez.WeezAPI("w9suD5t0Hpq125HNjQn7YaiL3vI2H1iESdEd");
  8

 let member = message.mentions.users.first()
 
let img = await weez.wasted(member.displayAvatarURL)
message.channel.send({files: [img]})
  
}