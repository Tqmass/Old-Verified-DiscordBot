const Discord = require('discord.js')


 let estadouser = {
   
   
   "online":"<a:plexionline:643830291886243840>   Online", //pon un emoji <:emojis:id123123213>
   "idle":"<a:plexiiddle:643830291638648845>  Ausente",
   "dnd":"<a:plexidnd:643830292141965322>  No Molestar",
   "invisible":"<a:plexioffline:643830291894632460>  Invisible/Desconectado",
 } 

exports.run = async (client, message, args, color) => {
  
  
      let userm = message.mentions.users.first()
     if(!userm){
      var user = message.author;
      
    const embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
    .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
    .setDescription("<a:Loading2:643830292532166666> __**Aquí Tienes tú información**__ " + user)
    .addField("<a:hypesquad:643830379115053078> | __**Tú Nombre**__:", user.username)
    .addField("<a:yesornot:643830293450719252> | __**¿Eres un BOT?**__:", `${user.bot}`, true)
    .addField("<a:Dance:594792886902718465> | __**Estás Jugando a**__:", `${user.presence.game ? user.presence.game.name : '<a:TickNo:643830293610102795> | __**No estas Jugando a NADA**__'}`, true)
    .addField("<a:Happy2:643830293274296320> | __**Tú Estado**__:", `**${estadouser[user.presence.status]}**`, true)
    .addField("<a:639525716408533017:643830294419603476> | __**Tú ID**__:", user.id, true)
    .addField("<:ewe:613998698900357131> | __**Creaste tu cuenta**__:", user.createdAt.toDateString())
    .addField("<a:4928_NyanParty:594792874302767106> | __**Fecha en la que Ingresaste**__:", message.member.joinedAt.toDateString())
    .setColor("0x5b00ff")
    .setImage("https://media.giphy.com/media/1cXN3ppw2lC0M/giphy.gif")
        
       message.channel.send({ embed });
     }else{
    const embed = new Discord.RichEmbed()
    .setThumbnail(userm.avatarURL)
    .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
    .setDescription("<a:Loading2:643830292532166666> __**Descripción de**__ " + userm)
    .addField("<a:hypesquad:643830379115053078> | __**Nombre**__:", userm.username)
    .addField("<a:yesornot:643830293450719252> | __**¿Es un BOT?**__:", `${userm.bot}`)
    .addField("<a:Dance:594792886902718465> | __**Está Jugando a**__:", `${userm.presence.game ? userm.presence.game.name : '<a:TickNo:643830293610102795> | __**No esta Jugando a NADA**__'}`, true)
    .addField("<a:Happy2:643830293274296320> | __**Su Estado**__:", `**${estadouser[userm.presence.status]}**`, true)
    .addField("<a:639525716408533017:643830294419603476> | __**ID**__:", userm.id, true)
    .addField("<:ewe:613998698900357131> | __**Cuenta Creada**__:", userm.createdAt.toDateString())
    .addField("<a:4928_NyanParty:594792874302767106> | __**Fecha en la que Ingreso**__:", message.member.joinedAt.toDateString())
    .setColor("0x5b00ff")
    .setImage("https://steamuserimages-a.akamaihd.net/ugc/81465700590064956/28AC057B5FA61DB341D469F48BC9B60660A8FF48/")
      
     message.channel.send({ embed });
    }     
  }