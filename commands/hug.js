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
  let abrazo = ["https://i.pinimg.com/originals/63/63/06/636306b78e9a992418f10c427a0a3b66.gif", "https://i.pinimg.com/originals/02/7e/0a/027e0ab608f8b84a25b2d2b1d223edec.gif", "https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif?itemid=10307432", "https://data.whicdn.com/images/81425499/original.gif", "https://i.imgur.com/XEs1SWQ.gif"]
  if (!mencionado) return message.reply("<a:love2:594792878644133909> | __**Menciona a alguien para dar un abrazo**__!")
  
  const embed = new Discord.RichEmbed()
  .setDescription(`<a:flecha2:652545426054053920> | **${autor}** __le dio un abrazo a__ **${mencionado}** `)
  .setColor("RANDOM")
  .setImage(abrazo[Math.floor(Math.random() * abrazo.length)])
  
  message.channel.send(embed);
}