var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require('discord.js')

exports.run = async (client, message, args) => {

       let texto = args.join(" ");           
                    const embed = new Discord.RichEmbed()
                       
                        .setAuthor("Jump.",  client.user.avatarURL)
                        .setDescription("<a:configurating:652935790846017537> | __**Menciona a un/a Usuario/a**__")
                        .setImage("https://media.discordapp.net/attachments/595203556487725087/653186720703053849/bart.png?width=201&height=300")
                        .setColor("0x5b00ff")
                        .setFooter(message.author.tag, message.author.avatarURL)
                        .setTimestamp(message.createdAt)
  
if(!texto) return message.channel.send({embed})
    let user = message.mentions.users.first();
  let member = message.mentions.users.first() 
let img = await weez.bart(member.displayAvatarURL)


  let embed2 = new Discord.RichEmbed()
  .setAuthor("Jump. | Bart", client.user.avatarURL)
  .attachFiles([{
    attachment: img,
    name: "bart.png"
  }])
  .setImage("attachment://bart.png")
  .setColor("RANDOM")
  //
  //message.channel.send({files: [img]});
  message.channel.send(embed2);
}