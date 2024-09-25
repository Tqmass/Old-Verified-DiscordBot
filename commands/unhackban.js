const Discord = require('discord.js')
const db = require('mega-dtbs')
let prefix_db = new db.crearDB("prefixes")
exports.run = async (client, message, args, color) => {
  
let prefix;
if(prefix_db.tiene(`${message.guild.id}`)) {
  prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
  prefix = "("
}
  let id = args.join(' ');
  if (!message.member.hasPermission(["BAN_MEMBERS"], false, true, true)) return message.channel.send(`"<a:TickNo:643830293610102795> **|** __No tienes permisos__!."`);
  let member = client.fetchUser(id)
  .then(user => {
    message.guild.unban(user.id)
    .then(() => {
    var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | UnHackBan", client.user.avatarURL)
   .setColor("0x5b00ff")
   .setDescription(`<a:FlechaDerecha:643830378498621460> __**${user}**__ \n \n <a:configurating:652935790846017537> ___**Ha sido desbaneado**___ \n \n <a:PepeMusic:655797476393091073> __**Desbaneado por**__: ${message.author}`)
   .setFooter(message.author.tag, message.author.avatarURL)
   .setImage("https://media.giphy.com/media/U5x6049xbITrG/giphy.gif")
    message.channel.send({embed});
    }).catch(err => {
        message.channel.send(`<a:TickNo:643830293610102795> | **Error al intentar desbanear a __${user}__**`)
    })
  }).catch(() => message.channel.send("<a:TickNo:643830293610102795> | __**No encontre a ningun/a Usuari@ con esa ID**__..."))
}
  

module.exports.help = {
  name: "unhackban"
}