const Discord = require('discord.js')
const db = require('mega-dtbs')
let prefix_db = new db.crearDB("prefixes")
exports.run = async (client, message, args, color) => {
  
if(message.author.id !== "393507216826564618" & message.author.id !== "614320764677783553" &  message.author.id !== "473233207488282656") return message.channel.send(`<a:escudo_no:647757855251759134> ERROR | No tienes permisos para usar este comando.`)
  
let prefix;
if(prefix_db.tiene(`${message.guild.id}`)) {
  prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
  prefix = "("
}

  message.channel.send(`<a:Happy2:643830293274296320> | __**Estoy en ${client.guilds.size} servidores**__:`)
  message.channel.send(client.guilds.map(g=>g.name).join('\n'))
  message.delete()
  }