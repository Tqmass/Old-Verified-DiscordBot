exports.run = (client, message, args) => {
  const Discord = require("discord.js");

  message.guild.fetchInvites().then(invs => {
    let user = message.mentions.users.first() || message.author;
    let personalInvites = invs.filter(i => i.inviter.id === user.id);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);

    const embed = new Discord.RichEmbed()
      .setAuthor("Jump. | Invites", client.user.avatarURL)
      .setDescription(
        message.author + `\n \n __**Tienes**__ ${inviteCount} __**invites**__`
      )
      .setColor("RANDOM")
      .setImage(
        "https://media1.tenor.com/images/56886b7f8c6386776058598c2f2a2dc7/tenor.gif?itemid=12313908"
      );
    message.channel.send(embed);
  });
};
