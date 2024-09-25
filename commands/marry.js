const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first();
  
    var embed = new Discord.RichEmbed()
     embed.setImage("https://thumbs.gfycat.com/AntiqueAdeptAoudad-small.gif")
     embed.setAuthor("Jump. | Marry", client.user.avatarURL)
     embed.setDescription("<a:TickNo:652089238527148072> __**Menciona a alguien**__")
  
    var embed1 = new Discord.RichEmbed()
     embed1.setImage("https://thumbs.gfycat.com/RareFaroffHorseshoebat-small.gif")
     embed1.setAuthor("Jump. | Marry", client.user.avatarURL)
     embed1.setDescription("<a:TickNo:652089238527148072> __**No puedes casarte contigo**__")
  
    var embed2 = new Discord.RichEmbed()
     embed2.setImage("http://s2.favim.com/orig/140819/angry-anime-cute-fullmetal-alchemist-Favim.com-2005501.gif")
     embed2.setAuthor("Jump. | Marry", client.user.avatarURL)
     embed2.setDescription("<a:TickNo:652089238527148072> __**No puedes casarte conmigo**__")
  
    var embed3 = new Discord.RichEmbed()
     embed3.setImage("https://i.gifer.com/2R9e.gif")
     embed3.setAuthor("Jump. | Marry", client.user.avatarURL)
     embed3.setDescription("<a:TickNo:652089238527148072> __**No puedes casarte con un Bot**__")
  
      var embed4 = new Discord.RichEmbed()
     embed4.setImage("https://media3.giphy.com/media/iFsWrarlHXEI109eef/giphy.gif")
     embed4.setAuthor("Jump. | Marry", client.user.avatarURL)
     embed4.setDescription("<a:TickNo:652089238527148072> __**Ese/a usuario/a ya está casado/a.**__")
  
   var embed5 = new Discord.RichEmbed()
     embed5.setImage("https://media1.tenor.com/images/2e915cd96500daf6349a2f4a75a4e8de/tenor.gif?itemid=8409151")
     embed5.setAuthor("Jump. | Marry", client.user.avatarURL)
     embed5.setDescription("<a:TickNo:652089238527148072> __**¡Tú ya estas casado/a!**__")
  
     var embed6 = new Discord.RichEmbed()

     embed6.setImage("https://uploads.disquscdn.com/images/a7e8a3f8c38932ef0c44dbd590bc104caf65ddff53ee5f6c23da4d4325e432fc.gif")
     embed6.setAuthor("Jump. | Marry", client.user.avatarURL)
     embed6.setDescription(`<a:love2:594792878644133909> ${user} \n \n <a:FlechaDerecha:643830378498621460> <@${message.author.id}> __**¡Te está pidiendo matrimonio!**__ \n \n \n <a:Gem:643830379199070258> Di: __**Si**__ (___Si quieres aceptar___) \n \n <a:PandaTraumado:662035121347493938> Di: __**No**__ (___Si quieres rechazarlo/a___) \n \n \n <a:hmmloading:622876648601026570> __**Tienes 30 segundos para responder**__`)
  
        var embed7 = new Discord.RichEmbed()
     embed7.setImage("https://media.giphy.com/media/ll5leTSPh4ocE/giphy.gif")
     embed7.setAuthor("Jump. | Marry", client.user.avatarURL)
     embed7.setDescription("<a:love2:594792878644133909> __**¡Felicidades, ahora forman una familia!**__ ")
  
  var embed8 = new Discord.RichEmbed()
     embed8.setImage("https://i.pinimg.com/originals/be/15/23/be1523608b4a9aff4035e70570c9fea7.gif")
     embed8.setAuthor("Jump. | Marry", client.user.avatarURL)
     embed8.setDescription(`<a:PandaThanos:594792888706269194> __**¡Lo siento, ${user} no quiso casarse contigo!**__ `)
  
   var embed9 = new Discord.RichEmbed()
     embed9.setImage("https://pa1.narvii.com/6094/8433d032c754da17f5f6821c98e4bd04ad67b291_hq.gif")
     embed9.setAuthor("Jump. | Marry", client.user.avatarURL)
     embed9.setDescription(`<a:TickNo:652089238527148072> __**¡El tiempo se ha agotado!**__ `)
  
  if (!user) return message.channel.send(embed)
  if(user.id === message.author.id) return message.channel.send(embed1)
  if(user.id === client.user.id) return message.channel.send(embed2)
  if(user.bot) return message.channel.send(embed3)
  
    const marrys = await db.fetch(`marry_${user.id}`)
    if(marrys) return message.channel.send(embed4)
    const married = await db.fetch(`marry_${message.author.id}`) 
    if(married) return message.channel.send(embed5);
  
  message.channel.send(embed6)
  .then(() => {
     message.channel.awaitMessages(response => response.content == "Si" && response.author.id == user.id || response.content == "No" && response.author.id == user.id, {
                max: 1,
                time: 30000,
                errors: ['time'],
            })
            .then((collected) => {
                if (collected.first().content == "Si") {
  db.set(`marry_${message.author.id}`, user.tag)
  db.set(`married_${message.author.id}-${user.id}`, true);
  db.set(`marry_${user.id}`, message.author.tag)
  db.set(`married_${user.id}-${message.author.id}`, true);
                    message.channel.send(embed7)
                }
          else if(collected.first().content == "No") {
                    message.channel.send(embed8);
                }
            })
            .catch(() => {
                message.channel.send(embed9);
            });
    

  
    
  });
}