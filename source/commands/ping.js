const discord = require ("discord.js");

exports.run = (client, message, args) =>{
    const help = new discord.MessageEmbed()
    .setColor('#212121')
    .setTitle('API Ping')
    .addFields(
        {name: "...", value: `{Math.round(client.ws.ping)}ms`},
        )
        .setFooter("Dmls Helper by dml#4665 V1.2", "https://cdn.discordapp.com/attachments/857297444571971615/945023316526235648/milky-way-2695569__480.png")
        message.channel.send({embed: help })
};



