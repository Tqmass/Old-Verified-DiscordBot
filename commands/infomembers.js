const Discord = require("discord.js")
exports.run = async (client, message, member, args) => {
  
 let estadouser = {
   
   
   "online":"<a:plexionline:643830291886243840>   Online", //pon un emoji <:emojis:id123123213>
   "idle":"<a:plexiiddle:643830291638648845>  Ausente",
   "dnd":"<a:plexidnd:643830292141965322>  No Molestar",
   "invisible":"<a:plexioffline:643830291894632460>  Invisible/Desconectado",
 } 
 
 const embed = new Discord.RichEmbed()
 .setColor(0x5b00ff)
 .setAuthor("Jump. | InfoMembers", client.user.avatarURL)
 .setImage("https://media.giphy.com/media/mlCb3AjEE6N4Q/giphy.gif")
 .setDescription('<a:cargando:652545381254823985> ___**Información | Miembros**___' + "\n \n <:PandaPensando:657271713138212864> " + `**${message.guild.memberCount}**` + " ___**Miembros en Total**___")
 .setTimestamp()
 .addField("<a:configurating:652935790846017537> ___**Estados de los miembros**___",
           `<a:flecha2:652545426054053920> **${message.guild.members.filter(o => o.presence.status === 'online').size}** Online <a:plexionline:643830291886243840>   \n<a:flecha2:652545426054053920> **${message.guild.members.filter(i => i.presence.status === 'idle').size}** Ausente <a:plexiiddle:643830291638648845>  \n<a:flecha2:652545426054053920> **${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** No Molestar <a:plexidnd:643830292141965322> \n <a:flecha2:652545426054053920> **${message.guild.members.filter(o => o.presence.status === 'offline').size}** Invisible/Desconectad@ <a:plexioffline:643830291894632460>  `)
 
message.channel.send({ embed });
  
}

