
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const VotreX = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setTitle("Votrex Guard Yardım Menüsü")
             .setTitle("**Bot şu anda beta aşamasındadır bazı komutlar çalışmayabilir!**")
             .setAuthor(`Kategoriler`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .addField(`Komutlar`, `${prefix}ban \n ${prefix}kanalkoruma \n ${prefix}küfürengel \n ${prefix}modlog  \n ${prefix}reklamengel  \n ${prefix}rolkoruma  \n ${prefix}temizle \n ${prefix}yavaşmod `) // bunlar boş kalırsa hata verir
             .addField(`Linkler ->`, `[Sunucumuz](https://discord.gg/kRMsVSNY2N) \n [Dlive](https://dlive.tv/) \n [Youtube](https://www.youtube.com/c/VotreX)`)
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL())
            
        return message.channel.send(VotreX);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}

exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
