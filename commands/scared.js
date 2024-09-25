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
  let abrazo = ["https://thumbs.gfycat.com/FrenchImpartialKawala-small.gif", "http://pa1.narvii.com/6569/c9c6d6b7ace7d59a3bfe9f2e5947862e978acd05_00.gif", "http://giphygifs.s3.amazonaws.com/media/PDaVAruWpT8pW/giphy.gif"]
  
  const embed = new Discord.RichEmbed()
  .setDescription(`<a:flecha2:652545426054053920> | **${autor}** __Esta asustad@__`)
  .setColor("RANDOM")
  .setImage(abrazo[Math.floor(Math.random() * abrazo.length)])
  
  message.channel.send(embed);
}