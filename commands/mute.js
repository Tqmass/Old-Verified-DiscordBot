let Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel("**No tienes el permiso para usar este comando**");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(tomute === message.guild.member(message.author)) return message.channel.send("¿Eres retrasado? ¿Por qué quieres silenciarte?")
  if(!tomute) return message.channel.send("No se pudo encontrar al usuario.");
  let muterole = message.guild.roles.find(`name`, "Silenciado");
  //Crear el rol de silenciado
  if (!muterole) {
    message.channel.send(':x: Rol no encontrado, for favor espere se esta Creando... :notes:');
    try {
      muterole = await message.guild.createRole({
        name: "Silenciado",
        color: "#444444",
        permissions: []
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }
  message.channel.send(`${tomute.user} fue muteado por ${message.author.tag}`)
let reason = args.join(" ").slice(22)
  await(tomute.addRole(muterole.id));
  let Embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setDescription(":mute: El Usuario "+ message.author.tag +"ha sido muteado ")
  .setColor("#747474")
  .addField("Usuario:", tomute.user.tag)
  .addField("Personal responsable:", message.author.tag)
  .addField("Motivo:", `${reason ? reason : "Ninguna."}`)
  .setTimestamp();
  message.channel.send(Embed)
  let Embed2 = new Discord.RichEmbed()
  .setThumbnail(tomute.user.avatarURL)
  .setTitle(":mute: ¡Has sido muteado!")
  .setDescription("Has recibido un muteo proveniente de "+ message.guild.name)
  .setColor("#747474")
  .addField(" Personal Responsable:", message.author.tag)
  .addField("Motivo:", `${reason ? reason : "Ninguna."}`)
  .setTimestamp();
 tomute.send(Embed2)
 }