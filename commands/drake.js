
const Discord = require('discord.js')
const db = require('mega-dtbs')
var Weez = require("weez");
var weez = new Weez.WeezAPI("zuUzes8ysJlBjW2KZd2f9ny0ZU6dfGBOqWeA");
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
                       
                        .setAuthor("Jump. | Drake [Ejemplo]",  client.user.avatarURL)
                        .setDescription("<a:configurating:652935790846017537> | __**Menciona alguien**__")
                        .setImage("https://www.meme-arsenal.com/memes/a4b15e0e49bea954c7fce9df617b7632.jpg")
                        .setColor("RANDOM")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
                  
                  if(!member) return message.channel.send({embed})

                  let img = await weez.drake(message.author.displayAvatarURL, member.displayAvatarURL)

                  
  
  message.channel.send(({ files: [img]}));
                 
                

                }