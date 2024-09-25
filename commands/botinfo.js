const Discord = require("discord.js")
exports.run = (client, message, args) => {
const embed = new Discord.RichEmbed()
    .setAuthor("Jump. | Información", client.user.avatarURL)
   .setDescription("<a:Loading2:643830292532166666> ┊ __**Información**__ / __**Contacto**__")
	  .addField('<a:BlackHeart:647757857227538432> ┊ __**Support Server**__:', '<a:configurating:652935790846017537> ┊ [[Click aquí]](https://discord.gg/Dc6DYPe)', true)
    .addField('<a:Gem:643830379199070258> ┊ __**Versión del Bot**__:', '<a:TickYes:643830296168628254> ┊ ``V.10.0``', true)
    .addField('<a:Money:655794107767062548> ┊ __**Librería**__:','<a:TickYes2:652089237990014987> ┊ ``discord.js``', true)
    .addField('<a:Mantenimientoxd:652545462292840448> ┊ __**Lenguaje de programación**__:', '<a:programando:643830294914269198> ┊ ``JavaScript``', true)
  	.addField('<a:hypesquad:643830379115053078> ┊  __**Prefijo de los comandos**__:', '<a:Happy2:643830293274296320> ┊ ``(``', true)
    .addField("<a:596578059579031553:652934723315957813>  ┊ __**Developers**__:", '・<a:love:594792886881484811>┊ __**<@614320764677783553>**__ \n ・ <a:love2:594792878644133909> ┊ __**<@393507216826564618>**__ \n ・ <a:configurating:652935790846017537> ┊ __**<@473233207488282656>**__ \n ・ <a:FlechaDerecha:643830378498621460> ┊ __**<@414844197607309322>**__', true)
    .setFooter("Jump. | V.10.0", client.user.avatarURL)
    .setColor("RANDOM")
    .setTimestamp(message.createdAt)
    .setImage("https://pa1.narvii.com/6316/39212f5126443e5736dc960cc79cf80398169d41_hq.gif")
message.channel.send(embed);
}
