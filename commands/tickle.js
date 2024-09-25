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
  let abrazo = ["https://thumbs.gfycat.com/ThornyAcidicAmericancicada-size_restricted.gif", "https://media1.tenor.com/images/16662667791fc3275c25db595fdf89f8/tenor.gif?itemid=12374065", "https://giphy.com/gifs/spongebob-squarepants-friendship-patrick-H2GX5Ik1ILy5q", "https://media1.tenor.com/images/02f62186ccb7fa8a2667f3216cfd7e13/tenor.gif?itemid=13269751"]
  if (!mencionado) return message.reply("<a:love2:594792878644133909> __**Menciona a alguien para hacerle cosquillas**__!")
  
  const embed = new Discord.RichEmbed()
  .setDescription(`<a:flecha2:652545426054053920> | **${autor}** __le hizo cosquillas a__ **${mencionado}**`)
  .setColor("RANDOM")
  .setImage(abrazo[Math.floor(Math.random() * abrazo.length)])
  
  message.channel.send(embed);
}