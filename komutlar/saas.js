const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

exports.run = (client, message, args) => {
  
    let prefix = ayarlar.prefix

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bunun için yetkin yok')
    if (!args[0]) return message.channel.send(new Discord.MessageEmbed()
    .setTitle('Hata')
    .setDescription(`\`${prefix}sa-as aç\` veya \`${prefix}sa-as kapat\` yazmalısın.`)
)
    if (args[0] === "aç") {
        db.set(`saas_${message.guild.id}`, "acik")
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Başarılı')
        .setDescription(`Sa-as sistemi başarı ile açıldı`)
        )
    }
    if (args[0] === "kapa") {
        db.delete(`saas_${message.guild.id}`)
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Başarılı')
        .setDescription(`Sa-as sistemi başarı ile kapatıldı`)
        )
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'sa-as'
}