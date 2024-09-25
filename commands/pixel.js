exports.run = async (client, message, args) => {    

  const marsnpm = require("marsnpm");
const Discord = require ('discord.js')
const user = message.mentions.users.first() || message.author
  let img = await marsnpm.pixel(user.avatarURL)     
  
  let texto = args.join(" ");

  let embud = new Discord.RichEmbed()
  .setAuthor("Jump. | Pixel [Ejemplo]", client.user.avatarURL)
  .setDescription ("<a:configurating:652935790846017537> | __**Menciona a alguien que quieras pixelear**__")
  .addField("<a:bored:652935787859673108> | __**Ejemplo**__: ", "(pixel @Usuario/a")
  .setColor("RANDOM")
  .setImage("https://media.tenor.com/images/3c46ac980730a641c7d7141c28204176/tenor.gif")
  

  if(!texto)  return  message.channel.send(embud);
  
let embed = new Discord.RichEmbed()
    .setAuthor("Jump. | Pixel", client.user.avatarURL)
    .setDescription("<a:configurating:652935790846017537> | __**Imagen Pixeleada**__")
     .attachFiles([{
    attachment: img,
    name: "pixel.png"
  }])
  .setColor("RANDOM")
    .setImage("attachment://pixel.png")
       .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(message.createdAt)

message.channel.send(embed)
}