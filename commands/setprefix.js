const Discord = require('discord.js')
const db = require('megadb')
let prefix_db = new db.crearDB("prefixes")
exports.run = async (client, message, args, color) => {
  
let prefix;
if(prefix_db.tiene(`${message.guild.id}`)) {
  prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
  prefix = "("
}
  
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:TickNo:643830293610102795> __**NO**__ tienes permiso para hacer esto!.")
    if(!args[0]) return message.channel.send("<a:TickNo:643830293610102795> __**Coloca el NUEVO**__ Prefix, que deseas colocar.")
   prefix_db.establecer(`${message.guild.id}`, args[0])
  return message.channel.send("<a:TickYes:643830296168628254> **|**  __**`NEW PREFIX`**__ ** |  __Mi prefix a sido cambiado a__**: " +args[0])
     }