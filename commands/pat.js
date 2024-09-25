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
  let abrazo = ["https://media1.tenor.com/images/68d981347bf6ee8c7d6b78f8a7fe3ccb/tenor.gif?itemid=5155410", "https://thumbs.gfycat.com/ShockingFaroffJavalina-size_restricted.gif", "https://i.gifer.com/TSw8.gif", "https://i.gifer.com/Jxpz.gif"]
 if (!mencionado) return message.reply("<a:love2:594792878644133909> | __**Menciona a alguien para acariciar**__!")
  
  const embed = new Discord.RichEmbed()
  .setDescription(`<a:flecha2:652545426054053920> | **${autor}** __Acarició a__ **${mencionado}** `)
  .setColor("RANDOM")
  .setImage(abrazo[Math.floor(Math.random() * abrazo.length)])
  
  message.channel.send(embed);
}