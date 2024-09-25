const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

//DESDE EMPEZAMOS A PONER LOS CODES

const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("megadb");
var Weez = require("weez");
var weez = new Weez.WeezAPI("zuUzes8ysJlBjW2KZd2f9ny0ZU6dfGBOqWeA");
const qdb = require("quick.db")
const config = require('./config.json')

let prefix_db = new db.crearDB("prefixes");
let logs_db = new db.crearDB("Logs")

client.on('guildCreate', guild => {
    let channel = client.channels.get("661612082789220375");

    const embed = new Discord.RichEmbed()

        .setDescription(`<a:pikachu:613999663602860032> ___¡Estoy en un **Nuevo Servidor**!___ \n \n <a:love2:594792878644133909> · ___**Nombre del Servidor**___: ${guild.name} \n <a:FlechaDerecha:643830378498621460> · ___**ID del Servidor**___: ${guild.id} \n <a:AppJedi:594792877599490048> · ___**Cantidad de Miembros/as**___: __${guild.memberCount}__ ¡Miembros/as!`)
        .setAuthor("Jump. | Logs", client.user.avatarURL)
        .setColor("RANDOM")
        .setImage("https://media.giphy.com/media/3o7buiXTKpaF9KS92g/giphy.gif")
    channel.send(embed)
});

//no toquen esto

client.on("guildDelete", guild => {
    let channel = client.channels.get("661612082789220375");

    const embed = new Discord.RichEmbed()

        .setDescription(`<:triste:594792826794147840> ___¡Me removieron de un **Servidor**!___ \n \n<a:pepedjsad:647757857500168212> · ___**Nombre del Servidor**___: ${guild.name} \n<a:Sad_2:628628531261472778> · ___**ID del Servidor**___: ${guild.id} \n<:SadLife:613863737148964881> · ___**Cantidad de Miembros/as**___: __${guild.memberCount}__ ¡Miembros/as!`)
        .setAuthor("Jump. | Logs", client.user.avatarURL)
        .setColor("RANDOM")
        .setImage("https://i.pinimg.com/originals/be/15/23/be1523608b4a9aff4035e70570c9fea7.gif")
    channel.send(embed)
});

//no toquen esto

//
//            _                    
//           | |    ___   __ _ ___ 
//           | |   / _ \ / _` / __|
//           | |__| (_) | (_| \__ \
//           |_____\___/ \__, |___/
//                        |___/     
//

client.on("messageDelete", async (message) => {
if(!logs_db.tiene(`${message.guild.id}`)) return;
let logs = await logs_db.obtener(`${message.guild.id}`)
const canalrendered = client.channels.get(logs)
const embed = new Discord.RichEmbed()
.setAuthor("Jump. | Logs", client.user.avatarURL)
.setDescription("<a:MusicEa:666678726825738240> ___Mensaje Eliminado___")
.setColor("RED")
.addField("<a:FlechaDerecha:643830378498621460> ___Usuario/a:___", `<@${message.author.id}>`, true)
.addField("<:feliz3:594792826269728771> ___Contenido:___", message, true)
.addField("<a:HypeSquad2:662034729759014941> ___Canal:___", message.channel, true)
canalrendered.send(embed)
   
});

client.on("roleCreate", async (role) => {
if(!logs_db.tiene(`${role.guild.id}`)) return;                                                       
let logs = await logs_db.obtener(`${role.guild.id}`)
const canalrendered = client.channels.get(logs)
const embed = new Discord.RichEmbed()
.setAuthor("Jump. | Logs", client.user.avatarURL)
.setDescription("<a:MusicEa:666678726825738240> ___Rol Creado___")
.setColor("RED")
.addField("<a:FlechaDerecha:643830378498621460> Rol:", role, true)
canalrendered.send(embed) 
});

client.on("roleDelete", async (role) => {
if(!logs_db.tiene(`${role.guild.id}`)) return;                                                       
let logs = await logs_db.obtener(`${role.guild.id}`)
const canalrendered = client.channels.get(logs)
const embed = new Discord.RichEmbed()
.setAuthor("Jump. | Logs", client.user.avatarURL)
.setDescription("<a:MusicEa:666678726825738240> ___Rol Eminado___")
.setColor("RED")
.addField("<a:FlechaDerecha:643830378498621460> Rol:", role, true)
canalrendered.send(embed)
   
});

client.on("emojiCreate", async (emoji) => {
if(!logs_db.tiene(`${emoji.guild.id}`)) return;                                                       
let logs = await logs_db.obtener(`${emoji.guild.id}`)
const canalrendered = client.channels.get(logs)
const embed = new Discord.RichEmbed()
.setAuthor("Jump. | Logs", client.user.avatarURL)
.setDescription("<a:MusicEa:666678726825738240> ___Emoji Agregado___")
.setColor("RED")
.addField("<a:FlechaDerecha:643830378498621460> Emoji:", emoji, true)
canalrendered.send(embed)
   
});

client.on("emojiDelete", async (emoji) => {
if(!logs_db.tiene(`${emoji.guild.id}`)) return;                                                       
let logs = await logs_db.obtener(`${emoji.guild.id}`)
const canalrendered = client.channels.get(logs)
const embed = new Discord.RichEmbed()
.setAuthor("Jump. | Logs", client.user.avatarURL)
.setDescription("<a:MusicEa:666678726825738240> ___Emoji Eliminado___")
.setColor("RED")
.addField("<a:FlechaDerecha:643830378498621460> Emoji:", emoji, true)
canalrendered.send(embed)
   
});

client.on('ready', () => {
  console.log("Estoy encendido!")
    setInterval(() => {
     const status = [
       `${client.users.size} Usuari@s`,
       `(help`,
    ];
     let random = Math.floor(Math.random() * status.length)
     client.user.setPresence({ game: { name: status[random], type: "STREAMING", url: "https://twitch.tv/Jump."}});
  }, 5000);
})

client.on("message", async (message) => {
let prefix;
if(prefix_db.tiene(`${message.guild.id}`)) {
  prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
  prefix = "("
}

  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  
	let command = message.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length);
	const args = message.content.slice(prefix.length).trim().split(" ");
	const cmd = args.shift().toLowerCase();  
	
	try {
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, message, args);
	} catch (e) {
		console.log(e.message)
	} finally {
		console.log(`${message.author.username} esta usando el comando: (${cmd}`);
	}
  
});

client.login(config.token);
