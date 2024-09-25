const Discord = require('discord.js')
exports.run = async (client, message, args, color) => {
  
  var embed1 = new Discord.RichEmbed()
  .setAuthor("Jump. | Amor", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(`<a:flecha2:652545426054053920> | **${message.author}** \n \n · ___Deberas mencionar a 2 personas para calcular el porcentaje de amor___`)
  .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)
  .setImage("https://thumbs.gfycat.com/AdolescentPeriodicBlacklab-size_restricted.gif")

let users = message.mentions.users.map(m => m).join(' y ');
if(!users) return message.channel.send(embed1);
    
const random = Math.floor(Math.random() * 100);
let heard = "";
  
  if (random < 50) {
    heard = "<a:pepedjsad:647757857500168212> **┊** __**Hmm, creo que esto no llegara lejos. ¡Podrían ser amigos!...**__";
  } else if (random < 89) {
    heard = "<a:love:594792886881484811> **┊** __**¡Podrían intertarlo!...**__";
  } else if (random < 101) {
    heard = "<a:love2:594792878644133909> **┊** __**¡Podrían ser novios/as!**__";
  }
            
    const embed = new Discord.RichEmbed() 
    .setColor(0x00AE86)
    .setImage("https://media.giphy.com/media/uJZckDbT7ht5e/giphy.gif")
    .setTimestamp()
    .setAuthor("Jump. | Amor", client.user.avatarURL)
    .setDescription("<a:PandaTraumado:662035121347493938> **┊** __**Calculando el amor de dos personas**__ \n \n" + "· <a:BlackHeart:647757857227538432> **┊** " + `${users} \n \n` + "<a:FlechaDerecha:662742896629252106> __**Porcentaje de Amor**__: " + random + "% \n" + `\n ${heard}`)
    
    message.channel.send({embed});
}