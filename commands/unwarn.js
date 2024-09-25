const db = require("quick.db")  
const Discord = require("discord.js")
 
exports.run = async (client, message, args) => {
    
    let user = message.mentions.users.first() || message.guild.members.get(args[0]);
    let perms = message.member.hasPermission("MANAGE_MESSAGES");
    let razón = args.join(" ")
    let advertencias = await db.fetch(`advertencias_${user + message.guild.id}`)
    
    if(!perms) return message.channel.send("<a:TickNo:643830293610102795> | No tienes los permisos suficientes.")
    if(!user) return message.channel.send("<a:TickNo:643830293610102795> | Menciona al usuario.")
    if(user.id == message.author.id) return message.channel.send("<a:TickNo:643830293610102795> | ¿Por qué te quieres borrar los avisos?, debera hacerlo otro staff")
    if(user.id == client.user.id) return message.channel.send("<a:TickNo:643830293610102795> | ¿Por qué me quieres borrar los avisos, cuando no tengo ninguno?")  
    
    if(advertencias === 0) return message.channel.send("<a:TickNo:643830293610102795> | Este usuario no tiene ninguna advertencia.")
  
     db.subtract(`advertencias_${user.id + message.guild.id}`, 1)      
    
    
    var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | Unwarn", client.user.avatarURL)
   .setColor("0x5b00ff")
   .setDescription(`<a:FlechaDerecha:643830378498621460> __**${user}**__ \n \n <a:configurating:652935790846017537> ___**Te han quitado 1 advertencia**___ \n \n <a:PepeMusic:655797476393091073> __**Advertencia quitada por**__: ${message.author}`)
   .setFooter(message.author.tag, message.author.avatarURL)
   .setImage("https://media.giphy.com/media/YD9kta4FkzFKM/giphy.gif")
    message.channel.send({embed});

  }