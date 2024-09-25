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
  
  let mencionado = message.mentions.users.first()
  let autor = message.author
  let puñetaso = ["https://thumbs.gfycat.com/MessyFilthyAmericancurl-size_restricted.gif", "https://i.pinimg.com/originals/eb/d5/1e/ebd51e19df33431a2f7c1597eac03648.gif", "https://media.giphy.com/media/YjHx1taZwpfd6/giphy.gif","https://gifsanimados.de/img-gifsanimados.de/n/naruto/gif-narutoshippuden.gif","https://gifsanimados.de/img-gifsanimados.de/n/naruto/pelea-de-naruto-gif.gif","https://gifsanimados.de/img-gifsanimados.de/g/goku/gokupiccolobroly.gif"]
  if (!mencionado) return message.reply("<a:Dance:594792886902718465> __**Menciona a alguien para dar un golpe**__!")
  
  const embed = new Discord.RichEmbed()
  .setDescription(`<a:flecha2:652545426054053920> **${autor}** __le dio un golpe a__ **${mencionado}** `)
  .setColor("RANDOM")
  .setImage(puñetaso[Math.floor(Math.random() * puñetaso.length)])
  
  message.channel.send(embed);
}