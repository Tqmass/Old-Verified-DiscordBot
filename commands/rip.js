const Discord = require('discord.js')
const marsnpm = require('marsnpm')
const db = require('mega-dtbs')
let prefix_db = new db.crearDB("prefixes")
exports.run = async (client, message, args, color) => {
  
let prefix;
if(prefix_db.tiene(`${message.guild.id}`)) {
  prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
  prefix = "("
}
  
const user = message.mentions.users.first() || message.author    
  
  let texto = args.join(" ");

  let embud = new Discord.RichEmbed()
  .setAuthor("Jump. | RIP [Ejemplo]", client.user.avatarURL)
  .setDescription ("<a:configurating:652935790846017537> | __**Menciona a alguien para que descanse en paz**__")
  .setColor("RANDOM")
  .setImage("https://media.giphy.com/media/r4W4L3TS2z8KQ/giphy.gif")
  

  if(!texto)  return  message.channel.send(embud);
  
let member = message.mentions.users.first() 
let img = await marsnpm.rip(member.avatarURL)
message.channel.send({files: [img]})
}
