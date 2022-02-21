const discord = require ("discord.js");

exports.run = (client, message, args) =>{
    const help = new discord.MessageEmbed()
    .setColor('#212121')
    .setTitle('Dmls Helper - Help')
    .setURL("")
    .addFields(
        {name: "Creator", value: "Information on the Creator and helpers. \n **Usage:** -creator \n"},
        {name: "Socials", value: "Sends a message with all my socials \n **Usage:** -socials\n"},
        {name: "Moderation", value: "Opens the Moderation Command list \n **Usage:** -mod\n"},
        )
    .setFooter("Dmls Helper by dml#4665 V1.2", "https://cdn.discordapp.com/attachments/857297444571971615/945023316526235648/milky-way-2695569__480.png")
    message.channel.send({embed: help })
};