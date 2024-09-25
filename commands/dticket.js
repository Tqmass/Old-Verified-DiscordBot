const Discord = require("discord.js");
exports.run = async (client, message, user) => {
    
  let usuario = message.member;
  let mencionado = message.mentions.members.first();
  let server = message.guild;
  if(!mencionado) message.reply("<a:escudo_no:647757855251759134> __**Menciona al Usuario/a del ticket**__")
  
  let cerrar = server.channels.find(ch => ch.name == "Support-" + `${usuario.id}`)
  
  message.channel.delete()
  
  
}