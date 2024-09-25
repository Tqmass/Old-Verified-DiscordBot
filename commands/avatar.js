const Discord = require('discord.js')
const db = require('mega-dtbs')
let prefix_db = new db.crearDB("prefixes")
exports.run = async (client, message, args, color) => {

        let img = message.mentions.users.first()
        if (!img) {
  
            const embed = new Discord.RichEmbed()
            .setImage(`${message.author.avatarURL}`)
            .setColor(0x66b3ff)
            .setDescription(` <a:TickYes2:643830292750139471> __**Tú Avatar**__ \n ${message.author}` + " <a:corazn:613999662155956225>")
            message.channel.send({ embed });
  
        } else if (img.avatarURL === null) {
  
            message.channel.sendMessage("__El usuario__ ("+ img.username +") __no tiene avatar!__");
  
        } else {
  
            const embed = new Discord.RichEmbed()
            .setImage(`${img.avatarURL}`)
            .setColor(0x66b3ff)
            .setDescription(`<a:TickYes2:643830292750139471> __**Avatar de**__: \n ${img}` + " <a:corazn:613999662155956225>" + " \n \n \n <a:Loading2:643830292532166666> __**Solicitado Por**__: \n" + `${message.author}` + " <a:corazn:613999662155956225>")
   
            message.channel.send({ embed });
  
        };
  
    }