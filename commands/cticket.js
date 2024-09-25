const Discord = require("discord.js");
exports.run = async (client, message, user, color) => {
  
  let usuario = message.member;
  let server = message.guild;
  let canalcreado = server.channels.find(ch => ch.name === "Support-" + usuario.id);
  if(canalcreado) return message.reply("<a:escudo_no:647757855251759134> __**Ya tienes un canal de Soporte creado**__")
  
  const embed = new Discord.RichEmbed()
  .setAuthor("Jump. | Ticket", client.avatarURL)
  .setDescription(`<a:flecha2:652545426054053920> `+ message.author + `\n \n \n<a:CartoonBan:643830296168497179> ___**Este es tu canal de Soporte temporal**___ \n \n · ___**Si nadie te responde menciona a un Superior**___`)
  .setColor("RANDOM")
  .setImage("https://images-ext-2.discordapp.net/external/vxqzuWx-bLIQmMfZuNdzYYlQqltp-M1l4lS01SVC9vA/https/media.giphy.com/media/yWscAzdfoM80/giphy.gif?width=400&height=206")
  
  
  const enviado = new Discord.RichEmbed()
  .setAuthor("Jump. | Ticket", client.avatarURL)
  .setDescription(`<a:flecha2:652545426054053920> `+ message.author + `\N \n<a:CartoonBan:643830296168497179> ___**Se creo correctamente tu canal de Soporte**___`)
  .setColor("RANDOM")
  .setImage("https://i.imgur.com/vxI8Mia.gif?noredirect")
  message.channel.send(enviado)
  
  message.guild.createChannel('Support-' + usuario.id,{type:
  'text'}).then(async canal => {
    canal.send(embed)
    canal.send("<" + message.author + ">")
    await canal.overwritePermissions(usuario, {
      VIEW_CHANNEL: true,
      SEND_MESSAGES: true,
      READ_MESSAGE_HISTORY: true,
      ATTACH_FILES: true,
      EMBED_LINKS: true
    });
  })
}