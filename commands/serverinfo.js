 const Discord = require("discord.js");


exports.run = async (client, message) => {

  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  const rolesList = message.guild.roles.map(e=>e.toString()).join(" ");
  var server = message.guild;
                  
                    const embed = new Discord.RichEmbed()
                      
                      .setAuthor("Jump. | ServerInfo", client.user.avatarURL)
                      .setDescription("<a:Loading2:643830292532166666> | __**Información sobre servidores**__")
                      .setColor("RANDOM")
                      .setFooter(message.author.tag, message.author.avatarURL)
                      .setTimestamp(message.createdAt)
                      .setThumbnail(message.guild.iconURL)
                      .addField("<a:hypesquad:643830379115053078> __**Nombre del servidor**__:", message.guild, true)
                      .addField("<a:Happy2:643830293274296320> __**Propietari@**__:", message.guild.owner, true)
                      .addField("<:ewe:613998698900357131> __**Fecha de Creación**__:", message.guild.createdAt, true)
                      .addField("<a:Gem:643830379199070258>  __**ID**__:", message.guild.id, true)
                      .addField("<:discord:613998694701727746> __**Region del Servidor**__:", message.guild.region)
                      .addField("<a:estrella:643830380708888595> __**Miembros**__:", message.guild.memberCount, true)
                      .addField("<a:plexionline:643830291886243840> __**Miembros Online**__:", message.guild.members.filter(m => m.presence.status === 'online').size || "<a:TickNo:643830293610102795> | __**¡No hay nadie Online!**__", true) 
                      .addField("<a:saludo:643830291764346886>  __**Canales de Texto & Voz**__:", message.guild.channels.size, true)
                      .addField("<a:programando:643830294914269198> __**Canal AFK**__:", message.guild.afkChannel || "<a:TickNo:643830293610102795> | __**¡No tiene canal de AFK configurado!**__", true)
                      .addField("<a:639525716408533017:643830294419603476> __**Tiempo de AFK**__:", message.guild.afkTimeout + " segundos" || "<a:TickNo:643830293610102795> | __**¡No tiene canal de AFK configurado!**__", true)
                      .addField("<a:plexisteaming:643830291672334408>  __**Nivel/es de Verificación**__:", message.guild.verificationLevel, true)
                      .addField("<a:Gem:643830379199070258>  __**Cantidad de Roles**__:", server.roles.size, true)
                      .addField("<a:TickYes2:643830292750139471> __**Cantidad de Emojis**__:", message.guild.emojis.size || "<a:TickNo:643830293610102795> | __**NO**__ tiene emojis", false)

                    message.channel.send({ embed });

              }