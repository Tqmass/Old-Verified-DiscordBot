const Discord = require("discord.js")
exports.run = async (client, message, args) => {

let escribir = args.join(' ');
     var error = new Discord.RichEmbed()
     error.setImage("https://i.pinimg.com/originals/60/ce/85/60ce854e8bf41b1f5df816da0428f31d.gif")
     error.setAuthor("Jump. | Esay", client.user.avatarURL)
     error.setDescription("<a:TickNo:652089238527148072> ___Escribe lo que quieres que diga el BOT en un embed___")
  
if(!escribir) return message.channel.send(error);
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(args.join(" "))
 message.channel.send(embed)
     message.delete()
;}