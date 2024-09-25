const Discord = require("discord.js")
exports.run = (client, message, args) => {

let user = message.mentions.members.first();
let razon = args.slice(1).join(' ');

var perms = message.member.hasPermission("KICK_MEMBERS");

if(!message.member.hasPermission('ADMINISTRATOR'))return message.channel.send('<a:TickNo:643830293610102795> | No perteneces al equipo Administrativo.')
  
if(!perms) return message.channel.send("`<a:TickNo:643830293610102795> | No tienes Permisos para usar este comando.");
if (message.mentions.users.size < 1) return message.reply('<a:TickNo:643830293610102795> | Debes mencionar a alguien.').catch(console.error);

if (!razon) return message.channel.send('<a:TickNo:643830293610102795> | Debes escribir una razón, `(kick @username [razón]`');
if (!message.guild.member(user).kickable) return message.reply('<a:TickNo:643830293610102795> | No puedo patear al usuario mencionado.');
     
message.guild.member(user).kick(razon);
var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | Kick", client.user.avatarURL)
   .setColor("0x5b00ff")
   .setDescription(`<a:FlechaDerecha:643830378498621460> __**${user.user}**__ \n \n <a:pepepolice:647757858238234625> ___**Ha sido Pateado**___ \n \n <a:mago:613999663351201813> __**Pateado por**__: ${message.author}` + " \n \n <a:596578059579031553:652934723315957813> __**Razón**__: \n"+razon)
   .setFooter(message.author.tag, message.author.avatarURL)
   .setImage("https://media.giphy.com/media/Bjrr8yofQVv3O/giphy.gif")
    message.channel.send({embed});
}