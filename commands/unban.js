const Discord = require("discord.js")
exports.run = (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:TickNo:643830293610102795> | No tienes los permisos.")
if(!args[0]) return message.channel.send("<a:TickNo:643830293610102795> | Introduce una ID del/de la usuari@")
let id = args[0]

if(isNaN(id)) return message.channel.send("<a:TickNo:643830293610102795> | Introduce una ID válida.")
if(id == client.user.id) return message.channel.send("<a:TickNo:643830293610102795> | No puedo desbanear a ese/a usuari@.")
if(message.guild.members.get(id)) return message.channel.send("<a:TickNo:643830293610102795> | ¡No cuela! Esta ID es de un usuari@ de este servidor.")

client.fetchUser(id).then(async (usuario) => { 
   let banusers = await message.guild.fetchBans();
   if(!banusers.has(usuario.id)) return message.channel.send('<a:TickNo:643830293610102795> | Ese usuari@ no esta baneado.');
 
   message.guild.unban(usuario.id).then(  () => {
     
    var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | UnBan", client.user.avatarURL)
   .setColor("0x5b00ff")
   .setDescription(`<a:FlechaDerecha:643830378498621460> __**${usuario}**__\n <a:estrellaroja:652545350170705920> __**ID**__: ${usuario.id} \n \n <a:configurating:652935790846017537> ___**Ha sido desbaneado**___ \n \n <a:PepeMusic:655797476393091073> __**Desbaneado por**__: ${message.author}`)
   .setFooter(message.author.tag, message.author.avatarURL)
   .setImage("https://media.giphy.com/media/Q7h9qFcIUoNiw/giphy.gif")
    message.channel.send({embed});
    }).catch(error => {
       message.channel.send("error: "+error.message)
   })
}).catch(error => {
   message.channel.send("<a:TickNo:643830293610102795> | __**Esa ID no existe**__")
})
}