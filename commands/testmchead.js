const Discord = require('discord.js')

exports.run = async (client, message, args) => {
// https://cravatar.eu/helmhead/username
let text = args.join(" ")
let headURL = `https://cravatar.eu/helmhead/${text}.png;`  
    if (!text)
      return message.channel.send(
        "<a:escudo_no:647757855251759134> Especifica un nick de minecraft!"
      );
    try {
      message.channel.send("<a:FlechaDerecha:643830378498621460> | ___**Cabeza de**___: **" + text + ":**", {
        files: [headURL]
      });
    } catch (err) {
      message.channel.send("<a:escudo_no:647757855251759134> Jugador no encontrado!"); 
    }
}