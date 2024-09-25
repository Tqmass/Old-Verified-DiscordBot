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
  
    const embed = new Discord.RichEmbed() 
    .setAuthor('Menú Comandos -> Jump.', client.user.avatarURL)
    .setColor(0x00AE86)
    .setImage("https://media.giphy.com/media/1cXN3ppw2lC0M/giphy.gif")
    .setTimestamp()
    .setDescription("__¡Hola! <a:saludo:643830291764346886> \n  \n Soy un BOT Divertido y Estricto \n \n Todo depende en la manera que quieras usarme.__ \n \n <a:TickYes2:643830292750139471> | __**Pronto Tendre Más Comandos**__")
    .addField("««───[ _-__**Comandos de MODERACIÓN**__-_ ]───»»",
      "<a:645250786938322984:652545462292840448> ┊ `hackban` `unhackban` `ban` `unban` `warn` `unwarn` `clear` `kick` `addrole` `removerole` `mute` `tempmute`")
    .addField("««───[ _-__**Comandos del BOT**__-_ ]───»»",
      "<a:configurating:652935790846017537> ┊ `setprefix` `8ball` `userinfo` `infomembers` `servers` `avatar` `botinfo` `marry` `divorce` `sugerencia`")
    .addField("««───[ _-__**Comandos de Busqueda**__-_ ]───»»",
      "<:pepeinvestigar:639163675843887107> ┊ `anime` `lyrics`")
    .addField("««───[ _-__**Manipulación de Imagenes**__-_ ]───»»",
      "<a:Happy2:643830293274296320> ┊ `trump` `logro` `logromc` `triggered` `bart` `pixel` `boton` `coche` `basura` `blur` `arte` `quiereso` `mind` `sniper` `gru` `cerebro` `eyes` `gay` `checkout` `fade` `licencia` `rip`")
    .addField("««───[ _-__**Interacciones**__-_ ]───»»",
      "<a:lel:652545379363061790> ┊ `punch` `hug` `pat` `cuddle` `slap` `tickle` `poke` `torture` `kill` `kiss`")
        .addField("««───[ _-__**Reacciones**__-_ ]───»»",
      "<a:bored:652935787859673108> ┊ `scared` `confused` `teleport` `happy` `jump` `sleep` `smug`")
    
    message.channel.send({embed});
}