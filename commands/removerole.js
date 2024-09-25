const Discord = require("discord.js")
exports.run = async (client, message, args) => {

if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
  
  let embed = new Discord.RichEmbed()
  embed.setColor("RED")
  embed.setDescription("<a:escudo_no:647757855251759134> | No tengo permisos")
  
  return message.channel.send(embed)
}

if(!message.member.hasPermission("MANAGE_ROLES")){
  
  let embed = new Discord.RichEmbed()
  
  embed.setColor("RED")
  embed.setDescription("<a:escudo_no:647757855251759134> | Lo siento, pero no tienes permisos")
  
  return message.channel.send(embed)
}

let persona = message.mentions.members.first()
let personembed = new Discord.RichEmbed()
.setColor("RED")
.setDescription('<a:escudo_no:647757855251759134> | Debe mencionar a alguien para quitarle el rol')

if(!persona) return message.channel.send(personembed);
let nombrerol = args.slice(1).join(' ')
let nombembed = new Discord.RichEmbed()
.setColor("RED")
.setDescription("<a:escudo_no:647757855251759134> | Debe mencionar el rol a quitar")

if(!nombrerol) return message.channel.send(nombembed);
let rol = message.mentions.roles.first()
if(!rol){
  let embed = new Discord.RichEmbed()
  embed.setColor("RED")
  embed.setDescription('<a:escudo_no:647757855251759134> | Rol no encontrado en el servidor')
  
  return message.channel.send(embed)

}else if(!rol.editable){
    let embed = new Discord.RichEmbed()
  embed.setColor("RED")
  embed.setDescription("<a:escudo_no:647757855251759134> | Lo siento, pero no puedo darle ese rol a nadie. Debido a que esta mas alto que mi rol")
  
  return message.channel.send(embed)

}else if(rol.comparePositionTo(message.member.highestRole) > 0){
  
    let embed = new Discord.RichEmbed()
  embed.setColor("RED")
  embed.setDescription("<a:escudo_no:647757855251759134> | Ese rol es mas alto que tu rol mas alto (en lo que a jerarquia se refiere), asi no puedes darselo a nadie")
  
  return message.channel.send(embed)

}

  let error = new Discord.RichEmbed()
  error.setColor("RED")
  error.setDescription("Ocurrio un **error** <a:escudo_no:647757855251759134>")
  
persona.removeRole(rol.id).catch(e => message.reply(error))
  
  let si = new Discord.RichEmbed()
  si.setColor("GREEN")
  si.setDescription(`<a:escudo_si:647764569372098561> __**Removi el rol**__ **${rol}** __**a**__ **${persona.user}**`)
      .setTimestamp()
  var d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');
  
message.channel.send(si)
message.delete()
}