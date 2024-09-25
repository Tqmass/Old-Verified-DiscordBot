const Discord = require('discord.js')
const db = require('mega-dtbs')
let prefix_db = new db.crearDB("prefixes")
exports.run = async (client, message, args, color) => {
  
if(!message.member.permissionsIn(message.channel).hasPermission("MANAGE_MESSAGES")){
    return message.channel.send("<a:TickNo:643830293610102795> | No tienes Permisos para usar este comando.")
}
if(!args) return message.channel.send(`<a:TickNo:643830293610102795> | Tienes que escribir algo para enviar.`);
 message.delete(1)
message.channel.send(args.join(" "));

  
}
