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
  let abrazo = ["https://media1.tenor.com/images/62e08bac3205243315f34e4fb4f46dc1/tenor.gif?itemid=13726734", "https://image.myanimelist.net/ui/Nxzta1m1Sc-kYrbG5bCjnhW61DJFMhDDgOr2379jVYgFrbJu9Kljx4-2yenv8j4gkhrSlRt3vVNrQnreuLk54w", "https://i.pinimg.com/originals/a0/07/b0/a007b0369556f5bd76897e10bc1c182a.gif", "https://thumbs.gfycat.com/GiddyTheseBighorn-size_restricted.gif"]
  if (!mencionado) return message.reply("<a:Dance:594792886902718465> __**Menciona a alguien para matarl@**__!")
  
  const embed = new Discord.RichEmbed()
  .setDescription(`<a:corazn:613999662155956225> **${autor}** __ha asesinado a__ **${mencionado}**`)
  .setColor("RANDOM")
  .setImage(abrazo[Math.floor(Math.random() * abrazo.length)])
  
  message.channel.send(embed);
}