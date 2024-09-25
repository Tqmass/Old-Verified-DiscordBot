const Discord = require("discord.js")
const malScraper = require('mal-scraper')
let translate = require('google-translate-api');

exports.run = (client, message, args) => {
    const search = args[0]
  
    const embed = new Discord.RichEmbed()
      .setAuthor("Jump. | Anime [Ejemplo]", client.user.avatarURL)
      .setDescription("<a:LuigiMarioBaile:594792883450544138> ___Escribe el nombre del anime para darte información!___")
      .setColor("RANDOM")
      .setImage("https://media.giphy.com/media/vUfAuWlvSPVsI/giphy.gif")
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp(message.createdAt)
  
    if (!search) return message.channel.send({embed});
  

  
  const dembed = new Discord.RichEmbed()
  .setAuthor('Jump. | Anime', client.user.avatarURL)
  .setTitle("<a:BlackHeart:647757857227538432> ___Buscando el anime___: \n \n · " + args.join(' '))
  .setDescription("<a:love2:594792878644133909> ___Espera unos segundos___")
  .setImage('https://media.giphy.com/media/EbuRwxi2Bt9rG/giphy.gif')
  .setColor("RANDOM")
  
message.channel.send(dembed).then(m => {
  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.RichEmbed()
      
      .setAuthor("Jump. | Anime", client.user.avatarURL)
      .setDescription("<a:BlackHeart:647757857227538432> | ___**Información del Anime**___")
      .addField("<a:pepepolice:647757858238234625> ___**Nombre del Anime**___:", "· " + args.join(' '), true)
      .addField('<a:Gem:643830379199070258> ___**Nombre en Japonés**___:', data.japaneseTitle, true)
      .addField('<a:Loading2:643830292532166666> ___**Fecha de transmisión**___:', data.aired, true)
      .addField('<a:FlechaDerecha:643830378498621460> ___**Tipo**___: ', data.type, true)
      .addField('<a:estrella:643830380708888595> ___**Edad**___', data.rating, true)
      .addField("<a:love2:594792878644133909> ___**Género**___", data.genres, true)
      .addField('<a:love:594792886881484811> ___**Capítulos**___', data.episodes, true)
      .addField('<a:PandaBrokePing:594792888500748288> ___**Calificación Media**___', data.score, true)
      .addField('<a:EDM:622876796806889502> ___**Calificaciones Totales**___', data.scoreStats, true)
      .addField(' ___**Ver Anime**___', '[» Click Aquí «](' + data.url + ')', true)
      .addField(" ___**Trailer del Anime**___:", data.trailer || "___**¡No hay ningún trailer disponible!**___" , true)
      .setColor("RANDOM")
      .setImage(data.picture)
	    .setFooter(message.author.tag, message.author.avatarURL)

      m.edit(malEmbed);
    
    }).catch((err) => {
    const error = new Discord.RichEmbed()
    .setAuthor("Jump. | Anime", client.user.avatarURL)
    .setTitle("<a:TickNo:643830293610102795> ___Anime no encontrado___ \n")
    .setDescription('___ · Lo siento **' + message.author + "** \n No hay información sobre:  **" + args.join(' ') + "** \n \n \n ___· `Verifica` si lo escrbiste bien___")
    .setThumbnail("https://media.giphy.com/media/MV3mNdon3RUwU/giphy.gif")
    .setColor('#ff0000')
    m.edit(error)
}) 
});  

}