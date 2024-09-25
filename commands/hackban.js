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
  let mid = args.join(' ');
  if (!message.member.hasPermission(["BAN_MEMBERS"], false, true, true)) return message.channel.send("<a:TickNo:643830293610102795> **|** __No tienes permisos__!.");
    client.fetchUser(mid).then(id => {
      message.guild.ban(id).catch(err => {
        message.channel.send("<a:TickNo:643830293610102795> | __**Error al intentar banear a**__: "+id)
        console.log(err)
      })
  var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | HackBan", client.user.avatarURL)
   .setColor("0x5b00ff")
   .setDescription(`<a:FlechaDerecha:643830378498621460> __**${id}**__ \n \n <a:configurating:652935790846017537> ___**Ha sido Baneado**___ \n \n <a:PepeMusic:655797476393091073> __**Banado por**__: ${message.author}`)
   .setFooter(message.author.tag, message.author.avatarURL)
   .setImage("https://media.giphy.com/media/yWscAzdfoM80/giphy.gif")
    message.channel.send({embed});
    }).catch(() => {
      message.channel.send(`<a:TickNo:643830293610102795> | __No encontre a un/a usuari@ con la id que especificaste__!`)
    })
}

module.exports.help = {
  name: "hackban"
}