var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
 
  
  let texto = args.join(" ");
  let embud = new Discord.RichEmbed()
  .setAuthor("Jump. | Logro [Ejemplo]", client.user.avatarURL)
  .setDescription ( "**Escribe un Logro que quieras desbloquear!**")
  .addField("Ejemplo : ", "**(logro LOGRO DESBLOQUEADO**")
  .setImage("https://generacionxbox.com/wp-content/uploads/2018/07/Andromeda-1233222.gif")
  .setColor("RANDOM")
  

  if(!texto) return  message.channel.send(embud);

let img = await weez.logro(texto)
  
  let embed = new Discord.RichEmbed()
  .setAuthor("Jump. | Logros Xbox", client.user.avatarURL)
  .setDescription ("<a:flecha2:652545426054053920> " + message.author + " ___**Desbloqueaste un Logro**___")
  .attachFiles([{
    attachment: img,
    name: "logro.png"
  }])
  .setImage("attachment://logro.png")
  .setColor("RANDOM")
  message.channel.send(embed);
}

