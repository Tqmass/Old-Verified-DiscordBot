const Discord = require("discord.js");
exports.run = async (client, message, args) => {
let mencionado = message.mentions.users.first()
if (!mencionado) return message.reply("<a:Dance:594792886902718465> __**Menciona a alguien para hackearl@**__!")
let autor = message.author

var correos = ["FvckInstagram@gmail.com", 
            "SoyVegetta777@gmail.com", 
            "SaitamaSensei@gmail.com", 
            "TuGfaEn4@gmail.com", 
            "VendoAzucar@gmai.com",
						"SailorMamon@gmail.com",
						"EllaNoMeAma@gmail.com",
						"MaincraftPro16@gmail.com",
						"FortniteProPLayer123@gmail.com",
            "SoyNub69@gmail.com",
						"ArribaEspaña6666@gmail.com",
						"SuicidarseEsBueno@gmail.com"];

var contraseñas = ["Me gusta Vegetta777", 
            "VivaMaincra", 
            "Maincra123", 
            "Fantastic", 
            "VendoCoca",
						"SailorMamon",
						"Fake123",
						"ElRubiusMiAmo",
						"Fortnite684",
            "QuieroMorir69",
						"EllaNoMeAma",
						"Sad456"];

  const hacked = new Discord.RichEmbed()

  .setAuthor("Jump. | Hacked ", client.user.avatarURL)
  .setDescription("<a:love2:594792878644133909>" + mencionado + "\n \n" + '<a:mago:613999663351201813> | __**Correo**__: ||'+correos[Math.floor(Math.random() * correos.length)] + "|| \n \n" + '<a:mago:613999663351201813> | __**Contraseña**__: ||'+contraseñas[Math.floor(Math.random() * contraseñas.length)] + "||")
  .setColor("RANDOM")
  .setTimestamp(message.createdAt)
  .setFooter(message.author.tag, message.author.avatarURL)
  
  const nohacked = new Discord.RichEmbed()

  .setAuthor("Jump. | NoHacked ", client.user.avatarURL)
  .setDescription("<a:love2:594792878644133909> " + mencionado + "\n \n" + '<a:mago:613999663351201813> ' + autor + ' \n \n · ___**Decidio perdonarte**___')
  .setColor("RANDOM")
  .setTimestamp(message.createdAt)
  .setFooter(message.author.tag, message.author.avatarURL)

var si = client.emojis.get("643830296168628254")
var no = client.emojis.get("643830293610102795")
let msg = await message.channel.send(message.author + " \n \n <a:BlackHeart:647757857227538432> | __**Seguro que quieres hackear a**__ " + mencionado + ' \n \n · __**Reacciona entre**__: \n \n · <a:TickYes:643830296168628254> (Si) \n · <a:TickNo:643830293610102795> (No)')
let user = message.author
if(user.bot) return; 
if(user.id !== message.author.id) return;
msg.react(si).then(() =>
msg.react(no), 20000);
    msg.awaitReactions((reaction, user) => {
      if(user.bot) return;
      if(si === reaction.emoji){
setTimeout(() => {
msg.edit("___**Buscando en la base de datos**___...")
}, 1000)

setTimeout(() => {
msg.edit("__**Correo encontrado**__ \n \n · ___**Buscando Contraseña**___...")
}, 3000)
setTimeout(() => {
msg.edit("__**Contraseña encontrada**__ \n \n · ___**Analizando datos**___...")
}, 6000)
setTimeout(() => {
msg.edit("__**Datos analizados**__ \n \n · ___**Decifrando codigo**___...")
}, 9000)
setTimeout(() => {
msg.edit(hacked)
}, 10000)
reaction.remove(user);
      }  
    if(no === reaction.emoji){
        msg.edit(nohacked);
        reaction.remove(user);
  }
        
      });
                       
}