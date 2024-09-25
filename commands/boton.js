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
  
let user = message.mentions.users.first(); 
                  let member = message.mentions.users.first()
                  
                    const embed = new Discord.RichEmbed()
                       
                        .setAuthor("Jump. | Boton [Ejemplo]",  client.user.avatarURL)
                        .setDescription("<a:configurating:652935790846017537> __**Usa**__ (boton `Texto-1, Texto-2` \n \n ||[Recuerda separar los textos con una coma]|| \n \n ||Recomendacion: Usar frases cortas no largas.||")
                        .setImage("https://media.discordapp.net/attachments/595203556487725087/653179838601101312/file.jpg")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
  
let texto = args.join(' ');
     let opt = texto.split(', ');
     if(!opt[0]) return message.channel.send({embed})
     if(!opt[1]) return message.channel.send({embed}) 
  
let url = await marsnpm.boton(opt[0], opt[1])
 
message.channel.send({files: [url]})
}