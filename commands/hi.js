const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = [ "http://pa1.narvii.com/6432/904c8b78d4fbb65566b1ef596c9496829bd0fdf4_hq.gif",
                 "https://media1.tenor.com/images/d10c3d213be6893235d97ae768db8c07/tenor.gif?itemid=4608178",
                 "https://pa1.narvii.com/6485/e3679c0d9db6725eb7f6529cec96191b697106cb_hq.gif",
                 "http://1.bp.blogspot.com/-i99MGvdS8LE/UAxqqJ8B-9I/AAAAAAABIAw/cIyoVB4nsQU/s1600/105.gif",
                 "https://media1.tenor.com/images/3c52cc0620b94eb9b33a490f49da75e3/tenor.gif?itemid=9988141",
                 "https://k41.kn3.net/taringa/6/7/E/E/5/9/ZEROANIMEX/49A.gif",
                 "https://pa1.narvii.com/7235/16ed69cf2e533ff892f622b5a946157134a56468r1-500-278_hq.gif",
                 "https://1.bp.blogspot.com/-xjKpdz13dps/W1vrUF5QcOI/AAAAAAAACs8/MdJ5DUA_1_8CsqE6wW7OIXRmAWS4maehgCLcBGAs/s1600/4064713f701d9e9fee97ae8a7ddd0795200d1cad_hq.gif",
                 "https://media.tenor.com/images/8d955b40f825a8f6404326215351f956/tenor.gif",
                 "https://2.bp.blogspot.com/--kE1qMvK-cg/VvlWKm-9PhI/AAAAAAAADtk/kEmS-yfnz7IsuwOBjLR7oBRY8m-oOAEug/s1600/hi1.gif"
]
  
  
      var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | Hi", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('<a:Happy2:643830293274296320> | __**'+ message.author +'**__ \n \n · __**¡Esta saludandolos/as a todos/as!**__')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }