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
  let abrazo = ["https://media1.tenor.com/images/8f8ba3baeecdf28f3e0fa7d4ce1a8586/tenor.gif?itemid=12668750", "https://giphy.com/gifs/animated-cute-13YrHUvPzUUmkM"]
  if (!mencionado) return message.reply("<a:love2:594792878644133909> __**Menciona a alguien para acurrucarte**__!")
  
  const embed = new Discord.RichEmbed()
  .setDescription(`<a:flecha2:652545426054053920> | **${autor}** __Se acurruco a__ **${mencionado}** `)
  .setColor("RANDOM")
  .setImage(abrazo[Math.floor(Math.random() * abrazo.length)])
  
  message.channel.send(embed);
}