const Discord = require("discord.js")
exports.run = (client, message, args) => {
let suicidios = ["https://media3.giphy.com/media/3Ugq7dfV3nQDC/giphy.gif",
                     "https://media1.tenor.com/images/0f9847a5f258da9a3bdccc3860f91eb5/tenor.gif",
                     "https://media.giphy.com/media/3Cm8cxtSHqu6Q/giphy.gif",
                     "https://media.tenor.com/images/559aa39a13635744c3c3ecd32b2aeb60/tenor.gif",
                "https://media.giphy.com/media/IWM2uI93SaTde/giphy.gif",
                "https://data.whicdn.com/images/174338423/original.gif",
                "http://pa1.narvii.com/6295/426748afd24b01f7b06a81cdf5c90954d77d1c1b_hq.gif",
                "https://data.whicdn.com/images/174338297/original.gif",
                "https://thumbs.gfycat.com/FamiliarSourAddax-size_restricted.gif",
                "https://media.giphy.com/media/a23oYmHwhTeUw/giphy.gif",
                "https://i.gifer.com/FPU2.gif",
                "https://cdn109.picsart.com/203338997000202.gif",
                "https://4.bp.blogspot.com/-uyWVFlIUDCU/WB5AS2_0eXI/AAAAAAAACPE/AYtkKhsMhFwlgKCDUfeq17s5h1jxwMimgCPcB/s1600/tumblr_inline_nl5nokzp7a1sptc1c.gif",
                "https://i.gifer.com/3Wvr.gif",
                "https://66.media.tumblr.com/245e1dd0a0522ce16a011878726896e4/tumblr_nalod4huAl1rjsl9ao1_400.gif",
                "https://media.giphy.com/media/mKXAIFvB22znO/giphy.gif",
                "https://thumbs.gfycat.com/CleanSecondhandAlpineroadguidetigerbeetle-size_restricted.gif",
                "http://umi-no-hoshi.u.m.pic.centerblog.net/0cf44c4e.gif",         
                "https://media1.tenor.com/images/4e0a400d7621b5452854bcae00d9a98e/tenor.gif",
                "https://data.whicdn.com/images/174136025/original.gif",
                "https://gifimage.net/wp-content/uploads/2017/09/anime-girl-happy-gif-14.gif",
                "https://media2.giphy.com/media/KsPC9t0ToZhqU/giphy.gif",
                "https://media1.tenor.com/images/63bfef9c1e6bb6713a17d7bf096e0e11/tenor.gif",
                "https://66.media.tumblr.com/405d2242c783e34107d40abdd27cecf8/tumblr_nr626c0DW01uxf91ko2_500.gif",
                "https://i.gifer.com/ZOSx.gif",
                "https://vignette.wikia.nocookie.net/littlewitch/images/e/eb/Akko_Excited.gif",
                "https://media.giphy.com/media/SVs0cQ0nLRsLNUadmn/giphy.gif",
                "http://rsmg.pbsrc.com/albums/v475/moonspirit50/1337093427786.gif",
                "https://media1.tenor.com/images/7706dded712d1e0f6ddb38d0f6352c95/tenor.gif",
                "https://i.pinimg.com/originals/47/1a/72/471a725651514c97a259929b5d854715.gif",
                "https://media3.giphy.com/media/bOFvkt81UEMvu/giphy.gif",
                "https://gifimage.net/wp-content/uploads/2017/07/anime-happy-gif-16.gif",
                "https://4.bp.blogspot.com/-Mqvt9cm1UyE/UG6GTpq29WI/AAAAAAAADi8/Wyk6OkEf_4o/s1600/tumblr_madfjwU90k1qfkm7e.gif",
                "https://data.whicdn.com/images/264318432/original.gif",
                ]

    var embed = new Discord.RichEmbed()
   .setAuthor("Jump. | Happy", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription('<a:Happy2:643830293274296320> | __**'+ message.author +'**__ | __**¡Esta Feliz!**__')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp(message.createdAt)
  .setImage(suicidios[Math.floor(Math.random() * suicidios.length)])
        message.channel.send({embed});
  
  }