const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  
  //return message.channel.send("**NW** » Comando en mantenimiento.")
  let mensaje = args.join(" ")
  

var rpts = ["Es cierto.", 
            "Es decididamente así.", 
            "Sin duda.", 
            "Sí definitivamente.", 
            "Puedes confiar en ello.",
						"Como yo lo veo, sí",
						"Lo más probable.",
						"¡Claro!",
						"Sí.",
            "No veo respuesta en mi bola magica a tu pregunta.",
						"Las señales apuntan a que sí.",
						"Respuesta confusa, intenta otra vez.",
						"Pregunta de nuevo más tarde.",
						"Mejor no quiero decirte ahora.",
						"No se puede predecir ahora.",
						"Concéntrate y pregunta otra vez.",
						"No cuentes con ello.",
						"No.",
						"Mis fuentes dicen que no.",
						"La perspectiva no es tan buena.",
						"Muy dudoso."];

//var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente", " ¡Claro! "," Sí "," No "," ¡Por supuesto! "," Por supuesto que no "];
  
     const embed = new Discord.RichEmbed()
    
    .setAuthor("Jump. | 8ball [Ejemplo]", client.user.avatarURL)
  .setDescription('<a:BlackHeart:647757857227538432> | __**Coloca un contenido de pregunta \n \n · Que sean más de "Si" y "No"**__')
  .setTimestamp()
  .setImage("https://media1.tenor.com/images/b987f1465c5ce0d30aef7aa1a61d7c1a/tenor.gif?itemid=9102000")
 .setColor("RANDOM")
   if (!mensaje) return message.channel.send(embed)
    //message.channel.send(message.member.user+' a su pregunta `'+mensaje+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
  const ballEmb = new Discord.RichEmbed()

  .setAuthor("Jump. | 8Ball ", client.user.avatarURL)
    .setDescription("<a:love2:594792878644133909> | __**8ball | Pregunta**__")
      .addField('<a:mago:613999663351201813> | __**Tú Pregunta**__: '+mensaje, "<a:Gem:643830379199070258> | __**Mi Respuesta**__: "+rpts[Math.floor(Math.random() * rpts.length)])
      .setColor("RANDOM")
  .setTimestamp(message.createdAt)
  .setImage("https://media.giphy.com/media/yzWxW50V4W8Bq/giphy.gif")
  .setFooter(message.author.tag, message.author.avatarURL)
			message.channel.send({embed: ballEmb})
}