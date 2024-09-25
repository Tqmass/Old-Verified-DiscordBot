const ms = require("ms");
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 
     let muterole = message.guild.roles.find(r => r.name === 'Muted');

  if (!tomute) return message.channel.send('<a:TickNo:643830293610102795> | __**Menciona o pon la ID del usuario por favor.**__')
  
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
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
      let mutetime = args[1];
  if (!mutetime) return message.channel.send('<a:TickNo:643830293610102795> | __**Por favor pon la cantidad de tiempo.**__\nEjemplo: *1h* *1m* *1sg*')

    message.delete().catch(O_o => {});
    var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | TempMute", client.user.avatarURL)
   .setColor("0x5b00ff")
   .setDescription(`<a:FlechaDerecha:643830378498621460> __**${tomute}**__\n <a:estrellaroja:652545350170705920> __**Tiempo**__: ${mutetime} \n \n <a:configurating:652935790846017537> ___**Ha sido temporalmente muteado**___ \n \n <a:PepeMusic:655797476393091073> __**Mute realizado por**__: ${message.author}`)
   .setFooter(message.author.tag, message.author.avatarURL)
   .setImage("https://media.giphy.com/media/ZKlYSwlqSpblC/giphy.gif")
    message.channel.send({embed});
    await (tomute.addRole(muterole));

    setTimeout(function() {
        tomute.removeRole(muterole);
        message.channel.send(` <a:LuigiMarioBaile:594792883450544138>| El usuario <@${tomute.id}> a sido desmuteado.`);
    }, ms(mutetime));
}