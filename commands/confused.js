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
  let abrazo = ["https://media1.tenor.com/images/818f89c2a4adccbbfbd80a818c34269a/tenor.gif?itemid=8987124", "https://thumbs.gfycat.com/HealthyCornyAmazontreeboa-size_restricted.gif", "https://i.pinimg.com/originals/bd/49/34/bd49340fdad5a8c38db46502d6e52b40.gif"]
  
  const embed = new Discord.RichEmbed()
  .setDescription(`<a:flecha2:652545426054053920> `+ message.author + ` __Esta confundid@__ `)
  .setColor("RANDOM")
  .setImage(abrazo[Math.floor(Math.random() * abrazo.length)])
  
  message.channel.send(embed);
}