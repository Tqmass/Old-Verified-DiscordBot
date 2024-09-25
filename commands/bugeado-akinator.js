const Discord = require("discord.js")
const akinator = require("mech-aki");
exports.run = async (client, message, args) => {
  
    var embed = new Discord.RichEmbed().setColor("RANDOM");
    var aki = new akinator();
    var pregunta = await aki.empezar();
 
    embed.setTitle(pregunta.pregunta);
 
    var respuestas = new Map([["643830296168628254", 0], ["643830293610102795", 1], ["647757855251759134", 2], ["613998698967597056", 3], ["647764366728495124", 4], ["643830378234249227", -9]]);
    var array_respuestas = ["643830296168628254", "643830293610102795", "647757855251759134", "613998698967597056", "647764366728495124", "643830378234249227"];

    embed.addField("<a:pikachu:613999663602860032> | __**Opciones de resupuestas**__", `<a:TickYes:643830296168628254>: **Sí**\n<a:TickNo:643830293610102795>: **No**\n<a:escudo_no:647757855251759134>: **No lo sé**\n<:pensar2:613998698967597056>: **Probablemente sí**\n<:PepeThor:647764366728495124>: **Probablemente no**\n<a:FlechaIzquierda:643830378234249227>: **Pregunta anterior**`, false);
 
    var msg = await message.reply(embed);
    for (let index = 0; index < array_respuestas.length; index++) await msg.react(array_respuestas[index]);


    while (aki.progreso < 85) {

        console.log(aki.progreso)
        var respuesta = await new Promise((resolve, reject) => {
                var collector = msg.createReactionCollector((reaction, user) =>
                !user.bot &&
                user.id === message.author.id && 
                reaction.message.channel.id === msg.channel.id &&
                reaction.remove(message.author)
                , {time: 60000});
                    collector.on("collect", r => {
                        resolve(r.emoji.name);
                        collector.stop();
                    });
                    collector.on("end", collected => resolve(null))
            })
 

        if (!respuesta) return msg.delete();

        var respuesta_num = respuestas.get(respuesta);

        pregunta = respuesta_num != -9 ? await aki.siguiente(respuesta_num) : await aki.atras();
       
        embed.setTitle(pregunta.pregunta);
        await msg.edit(embed);
    }

    var personajes = await aki.respuestas();
    var personaje = personajes.get(0);
    embed.setTitle("<:pepeinvestigar:639163675843887107> __**Tu personaje es:**__ " + personaje.nombre);
    embed.setDescription("<a:FlechaDerecha:643830378498621460> __**Es:**__ " + personaje.descripcion);
    embed.setImage(personaje.foto);
    embed.fields = [];
  
    message.reply(embed);
 
}