const Discord = require('discord.js')
const db = require('mega-dtbs')
let prefix_db = new db.crearDB("prefixes")
exports.run = async (client, message, args, color) => {
  
if(!message.guild.me.permissionsIn(message.channel).hasPermission("MANAGE_MESSAGES")){
    return message.channel.send("<a:TickNo:643830293610102795> | No tengo Permisos para usar este comando.")
}

if(!message.member.permissionsIn(message.channel).hasPermission("MANAGE_MESSAGES")){
    return message.channel.send("<a:TickNo:643830293610102795> | No tienes Permisos para usar este comando.")
}

if(!args) return message.channel.send('<a:TickNo:643830293610102795> | Porfavor, escribe la cantidad de mensajes que deseas eliminar.');
let cantidadm = parseInt(args[0])

if(!cantidadm) return message.reply("<a:TickNo:643830293610102795> | Introduce un numero del 1 al 100, para elimiar.") 

if(cantidadm > 98){
    message.channel.send("<a:TickNo:643830293610102795> | Lo maximo que puedo borrar son **100** mensajes.")
    cantidadm = 98
}

var cantidadreal = cantidadm + 0
   message.channel.send(`<a:configurating:652935790846017537> ___**Borrando ${cantidadreal} mensajes**___`)
message.channel.fetchMessages({limit: cantidadreal}).then((mensajes) => {
    var mensajes = mensajes.filter(m => !m.pinned && !m.system)


    setTimeout(() => {
        message.channel.bulkDelete(mensajes).then(() => {
    var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | Clear", client.user.avatarURL)
   .setColor("0x5b00ff")
   .setDescription(`<a:configurating:652935790846017537> ___**${cantidadreal} Mensajes borrados**___`)
   .setFooter(message.author.tag, message.author.avatarURL)
   .setImage("https://media.giphy.com/media/Jk2BoPsv0EQ3m/giphy.gif")
    message.channel.send({embed});
    message.delete(10000);
        }).catch(e => {
            switch(e.message){
                case("<a:TickNo:643830293610102795> | Solo puedes eliminar los mensajes que tengan menos de 14 días de antiguedad."):{
                    message.channel.send("<a:TickNo:643830293610102795> | No puedo eliminar mensajes con **2** semanas de antiguedad.")
                }
                default:{
                    console.log("<a:TickNo:643830293610102795> | Error, este comando esta fallando... \n" + e)
                }
            }
        })
    }, 3000)
})
}
                                                          
                                                    