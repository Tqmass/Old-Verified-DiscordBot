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
                       
                        .setAuthor("Jump. | Fade [Ejemplo]",  client.user.avatarURL)
                        .setDescription("<a:pepepolice:647757858238234625> | __**Menciona a una persona**__")
                        .setImage("https://media1.tenor.com/images/1e64c007f582e2c41f2b71765d0db215/tenor.gif?itemid=12068860")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                  
                  if(!member) return message.channel.send({embed})
  
let img = await marsnpm.fade(user.displayAvatarURL)
message.channel.send({files: [img]})
}