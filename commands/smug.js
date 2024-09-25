const client = require('nekos.life');
const neko = new client();
let Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first(); 
  let smug= await neko.sfw.smug()
           
    var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | Smug", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('<a:dog2multicolor:647757858384904242> | __**'+ message.author +'**__ __**¡Esta Presumiendo!**__')
  .setImage(smug.url)
    .setFooter(message.author.tag, message.author.avatarURL)
  
      
        message.channel.send({embed});
  
}