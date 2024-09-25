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
  let abrazo = ["https://thumbs.gfycat.com/PersonalUnlinedAsiaticwildass-size_restricted.gif", "https://i.imgur.com/4MQkDKm.gif", "https://media3.giphy.com/media/jLeyZWgtwgr2U/source.gif"]

  var embed1 = new Discord.RichEmbed()
  .setAuthor("Jump. | Slap", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(`<a:flecha2:652545426054053920> | **${autor}** __Toma una bofetada de mi parte__ \n \n · ___Deberas mencionar a alguien para bofetear a otra persona___`)
  .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)
  .setImage(abrazo[Math.floor(Math.random() * abrazo.length)])
  if (!mencionado) return message.channel.send(embed1)
  
  const embed = new Discord.RichEmbed()
  .setAuthor("Jump. | Slap")
  .setDescription(`<a:flecha2:652545426054053920> | **${autor}** __le dio un bofeteada a__ **${mencionado}** `)
  .setColor("RANDOM")
  .setImage(abrazo[Math.floor(Math.random() * abrazo.length)])
  
  message.channel.send(embed);
}