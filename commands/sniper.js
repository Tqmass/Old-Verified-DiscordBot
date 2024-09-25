exports.run = async (client, message, args) => {    

  const marsnpm = require("marsnpm");
const Discord = require ('discord.js')
const user = message.mentions.users.first() || message.author
  let img = await marsnpm.sniper(user.avatarURL)     
  
  let texto = args.join(" ");
  



  
      let embud = new Discord.RichEmbed()
  .setAuthor("Jump. | Sniper [Ejemplo]", client.user.avatarURL)
  .setDescription ("<a:configurating:652935790846017537> | __**Menciona a alguien para marcar el blanco**__")
  .addField("__**Ejemplo**__: ", "(sniper @Usuario/a")
  .setColor("RANDOM")
  .setImage("https://media.discordapp.net/attachments/595203556487725087/653177191353286687/sniper.png?width=287&height=300")
  

  if(!texto)  return  message.channel.send(embud);
  
let embed = new Discord.RichEmbed()
    .setAuthor("Jump. | Sniper", client.user.avatarURL)
    .setDescription("<a:configurating:652935790846017537> | __**Estas apuntando a**__ " + `${user}`)
     .attachFiles([{
    attachment: img,
    name: "sniper.png"
  }])
  .setColor("RANDOM")
    .setImage("attachment://sniper.png")
       .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(message.createdAt)

message.channel.send(embed)
}