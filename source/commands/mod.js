const discord = require ("discord.js");

exports.run = (client, message, args) =>{
        const {member, mentions } = message

        const tag = `<@${member.id}>`
        if(message.guild.me.hasPermission('BAN_MEMBERS')){        
            if(
            member.hasPermission('BAN_MEMBERS')){
                const moderation = new discord.MessageEmbed()
                .setColor('#212121')
                .setTitle('Dmls Helper - Help')
                .setURL("")
                .addFields(
        {name: "Kick", value: "Kicks mentioned member out of the discord server. \n **Usage:** -kick @person \n"},
        {name: "Ban", value: "Bans mentioned member from discord server. \n **Usage:** -ban @person \n"},
        {name: "Help", value: "Sends This Help Message \n **Usage:** -help\n"},
        )
        .setFooter("Dmls Helper by dml#4665 V1.2", "https://cdn.discordapp.com/attachments/857297444571971615/945023316526235648/milky-way-2695569__480.png")
             
    message.channel.send({embed:moderation })


            }else{
                message.channel.send(`${tag} you dont have permissions.`)
            }
        }else{
            message.channel.send(`${tag} Sorry I dont have permission to Ban Members!`)
        }
}