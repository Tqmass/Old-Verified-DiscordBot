const request = require("request").defaults({ encoding: null });
let Discord = require('discord.js')

exports.run = async (client, message, args) => { 
  if (args.length > 0) {
    message.channel.startTyping();
    const memeOutput = request(`https://www.minecraftskinstealer.com/achievement/a.php?i=13&h=Achievement+get%21&t=${args.join("+")}`);
    message.channel.stopTyping();
    
     let embed = new Discord.RichEmbed()
     .setAuthor("Jump. | LogroMC", client.user.avatarURL)
     .setDescription ("<a:flecha2:652545426054053920> " + message.author + " ___**Desbloqueaste un logro**___")
    .attachFiles([{
   attachment: memeOutput,
        name: "mc.png"
  }])
  .setColor("RANDOM")
    .setImage("attachment://mc.png")
    message.channel.send(embed)
    
  } else {
  let texto = args.join(" ");
  let embud = new Discord.RichEmbed()
  .setAuthor("Jump. | LogroMC [Ejemplo]", client.user.avatarURL)
  .setDescription ( "**Escribe un Logro que quieras desbloquear!**")
  .addField("Ejemplo : ", "**(logromc Talar Madera**")
  .setImage("https://gamepedia.cursecdn.com/minecraft_es_gamepedia/thumb/9/90/AchievementInterface.png/305px-AchievementInterface.png?version=de6a459e3025f044efc53c0da26c6127")
  .setColor("RANDOM")
  message.channel.send(embud)
  }
};