const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
  const help = new Discord.RichEmbed()
	.setColor(0x5b00ff)
  .setAuthor('Menú -> Jump.', client.user.avatarURL)
  .setURL("https://discordapp.com/oauth2/authorize?client_id=642044701523836935&scope=bot&permissions=8", "https://discord.gg/DxyktZW")
	.setDescription('<a:TickYes2:643830292750139471> __**DEVELOPERS**__: \n \n · __**<@614320764677783553>**__ \n · __**<@393507216826564618>**__ \n · <@473233207488282656>  \n · <@414844197607309322> \n \n <a:corazn:613999662155956225> __**Lista de comandos**__: Reacciona a "<a:FlechaDerecha:643830378498621460>" \n \n')
  .setThumbnail(client.user.avatarURL)
	.addField("\n ««───[ _-__**Links**__-_ ]───»»",
  '<a:pikachu:613999663602860032>  **|** [Invitame](https://discordapp.com/api/oauth2/authorize?client_id=673066084986781707&permissions=8&scope=bot) \n <a:love2:594792878644133909>  **|** [Vota por mi](https://top.gg/bot/642044701523836935/vote) \n <a:hypesquad:643830379115053078> **|** [Jump. | Support](https://discord.gg/Dc6DYPe) \n <a:Loading2:643830292532166666> **|** [La Taberna de Nicole](https://discord.gg/f3czGmZ) \n')
  .setTimestamp()
  .setImage("https://media.giphy.com/media/tUQecshrzKxZm/giphy.gif")
  
    const comandos = new Discord.RichEmbed() 
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

var izquierda = client.emojis.get("668426006465478657")
var derecha = client.emojis.get("668426006587113482")
let msg = await message.channel.send(help)
let user = message.author
if(user.id !== message.author.id) return;
msg.react(izquierda).then(() =>
msg.react(derecha), 20000);
    msg.awaitReactions((reaction, user) => {
      if(user.bot) return;
      if(izquierda === reaction.emoji){
        msg.edit(help);
        reaction.remove(user);
      }  
    if(derecha === reaction.emoji){
        msg.edit(comandos);
        reaction.remove(user);
  }
        
      });
                       
}