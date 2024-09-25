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
  let abrazo = ["https://media1.tenor.com/images/de80252a16557aad4ad9eeee836efeb1/tenor.gif?itemid=15882840", "https://media3.giphy.com/media/bm2O3nXTcKJeU/giphy.gif", "https://thumbs.gfycat.com/FailingGrimyGar-small.gif", "https://66.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif"]
  if (!mencionado) return message.reply("<a:Dance:594792886902718465> __**Menciona a alguien para matarl@**__!")
  
  const embed = new Discord.RichEmbed()
  .setDescription(`<a:corazn:613999662155956225> **${autor}** __le dio un beso a__ **${mencionado}**`)
  .setColor("RANDOM")
  .setImage(abrazo[Math.floor(Math.random() * abrazo.length)])
  
  message.channel.send(embed);
}