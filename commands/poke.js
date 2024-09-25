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
  let abrazo = ["https://media1.giphy.com/media/ZGOCW4Xob4pOM/source.gif", "https://i.imgur.com/oy66rwo.gif", "https://media.giphy.com/media/FdinyvXRa8zekBkcdK/giphy.gif"]
  if (!mencionado) return message.reply("<a:love2:594792878644133909> __**Menciona a alguien para fastidiarl@**__!")
  
  const embed = new Discord.RichEmbed()
  .setDescription(`<a:flecha2:652545426054053920> | **${autor}** __Esta fastidiando a__ **${mencionado}**`)
  .setColor("RANDOM")
  .setImage(abrazo[Math.floor(Math.random() * abrazo.length)])
  
  message.channel.send(embed);
}