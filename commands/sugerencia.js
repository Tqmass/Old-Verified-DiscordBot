const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
let ejemplo = new Discord.RichEmbed()
  .setAuthor("Jump. | Sugerencia [Ejemplo]", client.user.avatarURL)
  .setDescription ("<a:configurating:652935790846017537> | ___Escribe la sugerencia que tengas pensado___")
  .setColor("RANDOM")
  .setImage("https://media.giphy.com/media/EYXmhoRlLCDcs/giphy.gif")

let gracias = new Discord.RichEmbed()
  .setAuthor("Jump. | Sugerencia", client.user.avatarURL)
  .setDescription ("<a:love:594792886881484811> | ___¡Muchas gracias por tu sugerencia!___ \n \n · ___Pronto veras si fue **aceptada** o **denegada**___")
  .setColor("RANDOM")
  .setImage("https://media.giphy.com/media/kT1qMnXqyC5Fe/giphy.gif")

  let channel = client.channels.get("662025254650118173");
  let user = message.author;
  let sugerencia = args.join(" ");
  if (!sugerencia)
  return message.channel.send(ejemplo);

let enviar = new Discord.RichEmbed()
  .setAuthor("Jump. | Sugerencia", client.user.avatarURL)
  .setDescription (`<a:BlackHeart:647757857227538432> ___Enviado por:___ ${message.author} \n \n<a:FlechaDerecha:643830378498621460> ___Sugerencia:___  \n · ${sugerencia} \n \n · <a:TickYes2:643830292750139471> ___Sugerencia Aceptada___ \n · <a:TickNo:652089238527148072> ___Sugerencia denegada___`)
  .setColor("FF000")
  .setImage("https://media.giphy.com/media/RZ7hVBXTng3ni/giphy.gif")

  channel.send(enviar).then(async function(message) {
        message.react(":TickYes2:643830292750139471").then(() => 
           message.react(":TickNo:652089238527148072"), 20000);
  });
  message.channel.send(gracias) 
};