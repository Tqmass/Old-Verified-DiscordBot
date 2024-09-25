//https://media.discordapp.net/attachments/567306547055558656/590536808715124746/giphy.png

const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://media1.giphy.com/media/l2YWvhSnfdWR8nRBe/giphy.gif",
                     "https://media.giphy.com/media/1rPuZ4dKjiGpG/giphy.gif",
                     "https://media.tenor.com/images/7c1acb872dd671dfe6c562f45c7f0697/tenor.gif"
                ,"https://i.gifer.com/FHSG.gif"
                ,"https://thumbs.gfycat.com/BrilliantScaryAmethystsunbird-size_restricted.gif"
                ,"https://media.tenor.com/images/a29dabd6a644985e7d8235f45667c030/tenor.gif"
                ,"https://media1.tenor.com/images/b75232ae976324b84fce3471b0f15aa0/tenor.gif?itemid=10724320"
                ,"https://thumbs.gfycat.com/HugeBouncyAvians-size_restricted.gif"
                ,"https://media1.tenor.com/images/68b05ecaaeb60c2c667f4c2c5d3c3006/tenor.gif?itemid=12784473"
                ,"https://media1.giphy.com/media/Bj29dnhR2S7T2/giphy.gif"
                ,"https://media1.tenor.com/images/b1d7c4c3edbb152293305924fe93b796/tenor.gif?itemid=8756433"
                ,"https://i.pinimg.com/originals/56/a8/39/56a83919daa9fc23389977a7c38fca35.gif"
                ,"https://i.chzbgr.com/full/8414191104/h6D89F63F/"
                ,"https://thumbs.gfycat.com/ReflectingExaltedLadybug-size_restricted.gif"
                ,"https://i.pinimg.com/originals/5d/ae/84/5dae84ad0141f7a95e2951dae4b1f1b2.gif"
                ,"https://66.media.tumblr.com/1190674191e96025f35ec3a7a731eeee/tumblr_oz5rjpSM4l1tpvtc4o1_400.gif"
                ,"https://i.pinimg.com/originals/40/ae/d6/40aed63f5bc795ed7a980d0ad5c387f2.gif"
                ,"https://data.whicdn.com/images/326803988/original.gif"
                ,"https://media.giphy.com/media/13t4BZv8ov2hXi/giphy.gif"
                ,"https://gifimage.net/wp-content/uploads/2018/11/karma-jumping-at-nagisa-gif-2.gif"
                ,"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08793dd1-857d-440b-9c11-7b67206dfc84/dchvxvj-558949ba-42df-471e-97b8-8a9807252081.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4NzkzZGQxLTg1N2QtNDQwYi05YzExLTdiNjcyMDZkZmM4NFwvZGNodnh2ai01NTg5NDliYS00MmRmLTQ3MWUtOTdiOC04YTk4MDcyNTIwODEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.U7wPRrQwlzxKya8m1LV0qRC7OFXi1K2GhDso5cSwTcY"
                ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | Jump", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('<a:parryotrapido:647757848960565258> | __**'+ message.author +'**__ | __**Esta Saltando**__')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }