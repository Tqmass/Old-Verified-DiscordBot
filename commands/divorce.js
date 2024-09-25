const db = require('quick.db');
const Discord = require("discord.js")

exports.run = async(client, message, args) => {

  var user = message.mentions.users.first();
  
    var embed = new Discord.RichEmbed()
     embed.setImage("https://thumbs.gfycat.com/AntiqueAdeptAoudad-small.gif")
     embed.setAuthor("Jump. | Divorce", client.user.avatarURL)
     embed.setDescription("<a:TickNo:652089238527148072> __**Menciona a alguien**__")
  
      var embed1 = new Discord.RichEmbed()
     embed1.setImage("https://3.bp.blogspot.com/-pgWzf3E-Hes/WotTsFAwJqI/AAAAAAAAWcQ/1SAM-L4LEuoeFJmd1y8U98apz59DOJJigCLcBGAs/s640/erased-anime.gif")
     embed1.setAuthor("Jump. | Divorce", client.user.avatarURL)
     embed1.setDescription("<a:TickNo:652089238527148072> __**No estás casado con él/ella...**__")
  
  var embed2 = new Discord.RichEmbed()
     embed2.setImage("https://thumbs.gfycat.com/BlissfulPeacefulHoatzin-size_restricted.gif")
     embed2.setAuthor("Jump. | Divorce", client.user.avatarURL)
     embed2.setDescription("<a:pepedjsad:647757857500168212> __**¿Estás seguro/a que deseas divorciarte?**__ \n \n \n · Di: __**Si**__ (Para Aceptar) \n \n · Di: __**No**__ (Para Rechazar)")
  
  var embed3 = new Discord.RichEmbed()
     embed3.setImage("https://i.pinimg.com/originals/b6/a4/5d/b6a45d249001a7fd521b09ee17f64fb4.gif")
     embed3.setAuthor("Jump. | Divorce", client.user.avatarURL)
     embed3.setDescription(`<a:pepedjsad:647757857500168212> __**Te has divorciado de... ${user}**__`)
  
  var embed4 = new Discord.RichEmbed()
     embed4.setImage("https://i.pinimg.com/originals/b6/a4/5d/b6a45d249001a7fd521b09ee17f64fb4.gif")
     embed4.setAuthor("Jump. | Divorce", client.user.avatarURL)
     embed4.setDescription(`<a:love2:594792878644133909> __**Has decidido darle otra oportunidad**__`)
  
     var embed5 = new Discord.RichEmbed()
     embed5.setImage("https://pa1.narvii.com/6094/8433d032c754da17f5f6821c98e4bd04ad67b291_hq.gif")
     embed5.setAuthor("Jump. | Divorce", client.user.avatarURL)
     embed5.setDescription(`<a:TickNo:652089238527148072> __**¡El tiempo se ha agotado!**__ `)
  
  if(!user) return message.channel.send(embed);
  
  let married = await db.fetch(`married_${message.author.id}-${user.id}`);
  if(!married) return message.channel.send(embed1);
  let marrys = await db.fetch(`married_${user.id}-${message.author.id}`);
  if(!marrys) return message.channel.send(embed1);
  let m = await message.reply(embed2) 
  .then(() => {
     message.channel.awaitMessages(response => response.content == "Si" && response.author.id == message.author.id || response.content == "No" && response.author.id == message.author.id, {
                max: 1,
                time: 30000,
                errors: ['time'],
            })
            .then((collected) => {
                if (collected.first().content == "Si") {
    db.delete(`marry_${message.author.id}`) 
    db.delete(`married_${message.author.id}-${user.id}`)
    db.delete(`married_${user.id}-${message.author.id}`) 
    db.delete(`marry_${user.id}`)
                    message.channel.send(embed3) 
                }
          else if(collected.first().content == "No") {
                    message.channel.send(embed4);
                }
            })
            .catch(() => {
                message.channel.send(embed5);
            });
    

  
    
  });
}
