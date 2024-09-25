var Weez = require("weez");
var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
let Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  let member1 = message.mentions.users.first();

  const embed = new Discord.RichEmbed()

    .setAuthor("Jump. | Arte [Ejemplo]", client.user.avatarURL)
    .setDescription(
      "<a:configurating:652935790846017537> __**Menciona a un/una Usuario/a**__"
    )
    .setImage(
      "https://media.discordapp.net/attachments/647686572896157696/653192108836126729/arte.png"
    )
    .setColor("RANDOM")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(message.createdAt);

  if (!member1) return message.channel.send({ embed });

  let member = message.mentions.users.first();
  let img = await weez.arte(member.displayAvatarURL);

  let embed1 = new Discord.RichEmbed()
    .setAuthor("Jump. | Arte", client.user.avatarURL)
    .attachFiles([
      {
        attachment: img,
        name: "arte.png"
      }
    ])
    .setImage("attachment://arte.png")
    .setColor("RANDOM");
  //
  //message.channel.send({files: [img]});
  message.channel.send(embed1);
};
