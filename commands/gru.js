const Discord = require('discord.js')
const db = require('mega-dtbs')
let prefix_db = new db.crearDB("prefixes")
exports.run = async (client, message, args) => {
  
let prefix;
if(prefix_db.tiene(`${message.guild.id}`)) {
  prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
  prefix = "("
}
  
let escribir = args.join(' ');
 const embed = new Discord.RichEmbed()
                  
                        .setAuthor("Jump. | Gru [Ejemplo]",  client.user.avatarURL)
                        .setDescription("<a:configurating:652935790846017537> | __**Escribe 3 textos**__ \n \n \n · ___Recuerda separar los 3 textos con una coma___")
                        .setImage("https://images3.memedroid.com/images/UPLOADED935/5d4d2f679ef9f.jpeg")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                  
                  if(!escribir) return message.channel.send({embed})
  
let texto = args.join(' ');
     let opt = texto.split(', ');
     if(!opt[0]) return message.channel.send({embed})
     if(!opt[1]) return message.channel.send({embed})
     if(!opt[2]) return message.channel.send({embed})
 
 
var Weez = require("weez");
var weez = new Weez.WeezAPI("w9suD5t0Hpq125HNjQn7YaiL3vI2H1iESdEd");
  
let member = message.mentions.users.first()
let img = await weez.gru(opt[0], opt[1], opt[2])
message.channel.send({files: [img]})
}