const discord = require ("discord.js");

exports.run = (client, message, args) =>{
    const {member, mentions } = message

    const tag = `<@${member.id}>`
    if(message.guild.me.hasPermission('KICK_MEMBERS')){        
        if(
        member.hasPermission('KICK_MEMBERS')){
            const target = mentions.users.first()
            if(target){
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.kick()
                const kick = new discord.MessageEmbed()
                .setColor('#e6350e')
                .setTitle(`User Kicked`)
                .addField("User",`${target} was kicked from the server!`)
                .addField("Moderator",`${member}`)
                .setThumbnail(target.avatarURL())
                .setFooter("Dmls Helper by dml#4665 V1.2", "https://cdn.discordapp.com/attachments/857297444571971615/945023316526235648/milky-way-2695569__480.png")
                message.channel.send({embed: kick })
            }else{
                message.channel.send(`${tag} please specify a user!`)
            }
        }else{
            message.channel.send(`${tag} you dont have permission.`)
        }
    }else{
        message.channel.send(`${tag} Sorry I dont have permission to Kick Members!`)
    }
}    





