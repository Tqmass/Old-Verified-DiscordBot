const Discord = require('discord.js')
const db = require('mega-dtbs')
let prefix_db = new db.crearDB("prefixes")
exports.run = async (client, message, args, color) => {
  
let prefix;
if(prefix_db.tiene(`${message.guild.id}`)) {
  prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
  prefix = "("
}

let autor = message.author
  let besos = ["https://i.redd.it/qie8itirzff11.gif", "http://i.imgur.com/cn97k1e.gif", "https://media.giphy.com/media/qYHlTos5CDu0/giphy.gif", "https://media1.tenor.com/images/ca3e4e4d79e8ed590eadf121e2b3c9b2/tenor.gif?itemid=7926172", "https://media1.tenor.com/images/879fbfa179c7b510f21743e1a19f0de6/tenor.gif?itemid=11115606", "https://cdn.myanimelist.net/s/common/uploaded_files/1460140429-d60a2b5a534becb71153db8eaaaf4e14.gif", "https://media.giphy.com/media/ZUEVCzp1WVCNi/giphy.gif", "https://i.gifer.com/5m9a.gif"]
  
  const embed = new Discord.RichEmbed()
  .setDescription(`<a:flecha2:652545426054053920> | **${autor}** ___**Se hecho a correr**___ `)
  .setImage(besos[Math.floor(Math.random() * besos.length)])
  
  message.channel.send(embed);
}
