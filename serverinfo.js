const Discord = require(discord.js)
const colours = require("../colours.json");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor(colours.red)
    .setTitle("Server Information")
    .setThumbnail(message.guild.iconURL)
    .addField("**Guild Name:**", `${message.guild.name}`, true)
    .addField("**Server Staff:**", `${message.guild.owner}, ${"<@277170747104034817>"}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.size}`, true)
    .setFooter(`NationsDisc | Footer`, bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed}); 
}

module.exports.config = {
    name: "serverinfo",
    aliases: ["si", "serverdisc"]
}