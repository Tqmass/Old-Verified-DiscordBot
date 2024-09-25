const db = require("quick.db")  
const Discord = require("discord.js")
 
exports.run = async (client, message, args) => {
    let user = message.mentions.members.first() || message.guild.members.get(args[0]);
    let perms = message.member.hasPermission("MANAGE_MESSAGES");
    let razón = args.slice(1).join(" ")
    
    if(!perms) return message.channel.send("<a:TickNo:643830293610102795> | No tienes los permisos suficientes.")
    if(!user) return message.channel.send("<a:TickNo:643830293610102795> | Menciona a algún usuario.")
    if(!razón) return message.channel.send("<a:TickNo:643830293610102795> | Dime la razón de la advertencia.")
    if(user.id == message.author.id) return message.channel.send("<a:TickNo:643830293610102795> | ¿Por qué te quieres advertir?")
    if(user.id == client.user.id) return message.channel.send("<a:TickNo:643830293610102795> | ¿Por qué me quieres advertir?")  
    
     db.add(`advertencias_${user.id + message.guild.id}`, 1) 
     db.push(`razón_${user.id + message.guild.id}`, razón)
    
var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | Warn", client.user.avatarURL)
   .setColor("0x5b00ff")
   .setDescription(`<a:FlechaDerecha:643830378498621460> __**${user.user}**__ \n \n <a:pepepolice:647757858238234625> ___**Has sido advertido**___ \n \n <a:mago:613999663351201813> __**Advertido por**__: ${message.author}` + " \n \n <a:596578059579031553:652934723315957813> __**Razón**__: \n"+razón)
   .setFooter(message.author.tag, message.author.avatarURL)
   .setImage("https://media.giphy.com/media/dLfruuNt3K3PW/giphy.gif")
    message.channel.send({embed});
    
  }

module.exports.help = {
  name: "unwarn"
}