const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  
if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
  
  let embed = new Discord.RichEmbed()
  embed.setColor("RED")
  embed.setDescription("<a:TickNo:643830293610102795> | No tengo permisos.")
  
  return message.channel.send(embed)
}

if(!message.member.hasPermission("MANAGE_ROLES")){
  
  let embed = new Discord.RichEmbed()
  
  embed.setColor("RED")
  embed.setDescription("<a:TickNo:643830293610102795> | Lo siento, pero no tienes permisos.")
  
  return message.channel.send(embed)
}

let persona = message.mentions.members.first()

let personembed = new Discord.RichEmbed()
.setColor("RED")
.setDescription('<a:TickNo:643830293610102795> | Debes mencionar a alguien para darle el rol.')

if(!persona) return message.channel.send(personembed);

let nombrerol = args.slice(1).join(' ')

let nombembed = new Discord.RichEmbed()
.setColor("RED")
.setDescription("<a:TickNo:643830293610102795> | Debes mencionar el rol que deseas agregarle/a.")

if(!nombrerol) return message.channel.send(nombembed);

let rol = message.mentions.roles.first()
if(!rol){
  
  let embed = new Discord.RichEmbed()
  embed.setColor("RED")
  embed.setDescription('<a:TickNo:643830293610102795> | No he encontrado el rol asignado.')
  
  return message.channel.send(embed)
}else if(!rol.editable){
  
    let embed = new Discord.RichEmbed()
  embed.setColor("RED")
  embed.setDescription("<a:TickNo:643830293610102795> | Lo siento, pero no puedo dar ese rol a nadie, ya que esta mas alto que mi rol.")
  
  return message.channel.send(embed)
}else if(rol.comparePositionTo(message.member.highestRole) > 0){
  
    let embed = new Discord.RichEmbed()
  embed.setColor("RED")
  embed.setDescription("<a:TickNo:643830293610102795> | Ese rol es más alto que tú rol, no puedes dar roles más altos que los tuyos.")
  
  return message.channel.send(embed)
}

  let error = new Discord.RichEmbed()
  error.setColor("RED")
  error.setDescription("<a:TickNo:643830293610102795> | Error, avisa a mis creadores. Para verificar el error.")
  
persona.addRole( rol.id).catch(e => message.reply(error))
  
  let si = new Discord.RichEmbed()
  si.setColor("GREEN")
  si.setDescription(`<a:TickYes2:643830292750139471> | __**Rol**__: **${rol}** __**agregado a**__ **${persona.user}**`)
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