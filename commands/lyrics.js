const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let musica = args.slice(0).join('+');

        let link = `https://www.musica.com/letras.asp?q=` + musica;
  
          const error1 = new Discord.RichEmbed()
  .setAuthor("Jump. | Lyrics")
  .setDescription("<a:FlechaDerecha:643830378498621460> ___Escribe el nombre de la música que quieras ver la letra___")
  .setImage("https://thumbs.gfycat.com/TheseUnfoldedCheetah-size_restricted.gif")
  .setColor("RANDOM")
  .setFooter(message.author.tag, message.author.avatarURL)
  .setTimestamp(message.createdAt)
  
if(!musica)return message.channel.send(error1)
  
        if(!link)return message.reply("Error")
        let embed = new Discord.RichEmbed()
	
    .setColor(0x76d6ff)
    .setTimestamp()
    .setAuthor('Jump. | Lyrics')
    .setDescription("<:Drake:657271713117110282> Para ver la letra \n \n \n · ___Accede al Link y elige entre todas las letras de la canción___")
    .setImage("https://media.giphy.com/media/QAJVZPngQaD0Q/giphy.gif")
   	.setFooter(message.author.tag, message.author.avatarURL)
	  .addField("<a:Loading2:652089237486698526> Canción:", `${args.slice(0).join(' ')}`)
  	.addField('<a:lel:652545379363061790> Link:', `${link}`)
          
	message.channel.send(embed);
  
}