const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = [ "https://media1.tenor.com/images/8b00c464465b4ad9ead8db11ccdbdba2/tenor.gif?itemid=9905373",
                 "https://media.giphy.com/media/mPOyOUNCGUCJy/giphy.gif",
                 "http://parkerwiki0910.pbworks.com/f/Catherines%20AWESOME%20BYE.gif",
                 "https://steamuserimages-a.akamaihd.net/ugc/925920665338183739/DF7DA5E978E5292146CCE211DAF1738286F2D620/",
                 "https://data.whicdn.com/images/323649340/original.gif",
                 "https://media1.tenor.com/images/c9e6b390d407ea9c2eb0f300236c14e2/tenor.gif?itemid=9838588",
                 "https://m1.paperblog.com/i/507/5072993/como-ser-un-otaku-ser-criticado-L-JJipLB.gif",
                 "https://media.giphy.com/media/BJ1WKPrUrNEwU/giphy.gif",
                 "https://66.media.tumblr.com/dcb27e015385a58f6723d386e9e4646f/tumblr_mxd0y4eoIF1sdej06o1_500.gif",
                 "https://thumbs.gfycat.com/KeyWelloffFinnishspitz-size_restricted.gif"
]
  
  
      var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | Bye", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('<a:Happy2:643830293274296320> | __**'+ message.author +'**__\n \n \n · ___**¡Esta despidiendose de todos/as!**___')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
}