const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  
let texto = args.join(' ');
let opt = texto.split(', ');
  
let color = opt[0];
if(!color) return message.channel.send("<a:TickNo:643830293610102795> ___**Debes especificar un color**___ \n \n · ___**Para separar textos usa una coma**___")
let NombreEmbed = opt[1];
if(!NombreEmbed) return message.channel.send("<a:TickNo:643830293610102795> ___**Debes especificar el nombre del embed**___ \n \n · ___**Para separar textos usa una coma**___")
let Texto = opt[2]
if(!Texto) return message.channel.send("<a:TickNo:643830293610102795> ___**Debes escribir lo que quieres que diga en el embed**___ \n \n · ___**Para separar textos usa una coma**___")
let Imagen = opt[3]
if(!Imagen) return message.channel.send("<a:TickNo:643830293610102795> ___**Debes colocar un link de la imagen**___")

let CreateEmbed = new Discord.RichEmbed()
.setColor(color)
.setTitle(NombreEmbed)
.setDescription(Texto)
.setImage(Imagen)

message.channel.send(CreateEmbed)
  
}