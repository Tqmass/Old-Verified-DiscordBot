const Discord = require("discord.js");
const db = require ('megadb')
let logs_db = new db.crearDB("Logs")
exports.run = async (client, message, args) => {
let logs;
if(logs_db.tiene(`${message.guild.id}`)) {
  logs = await logs_db.obtener(`${message.guild.id}`)
}else{
  logs = "logs"
}
  
    var embed = new Discord.RichEmbed()
     embed.setImage("https://media.giphy.com/media/ikoUFi1tijWZG/giphy.gif")
     embed.setAuthor("Jump. | Logs", client.user.avatarURL)
     embed.setDescription("<a:TickNo:652089238527148072> __**No tienes suficientes permisos**__")
  
    var embed1 = new Discord.RichEmbed()
     embed1.setImage("https://media.giphy.com/media/aNpjeMwsU0a7C/giphy.gif")
     embed1.setAuthor("Jump. | Logs", client.user.avatarURL)
     embed1.setDescription("<a:TickNo:652089238527148072> __**Debes especificar el canal**__")
  
    var embed2 = new Discord.RichEmbed()
     embed2.setImage("https://media.giphy.com/media/2rsT2SvI6EuK4/giphy.gif")
     embed2.setAuthor("Jump. | Logs", client.user.avatarURL)
     embed2.setDescription("<a:FlechaDerecha:643830378498621460> __**Canal Logs**__ ___colocado correctamente___")

    let canal = message.mentions.channels.first();
    let perms = message.member.hasPermission("ADMINISTRATOR")


    if (!perms) return message.channel.send(embed)
    if (!canal) return message.channel.send(embed1)

    logs_db.establecer(message.guild.id, canal.id).then(O_o => {
      message.channel.send(embed2)
    })
}