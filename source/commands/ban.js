const discord = require ("discord.js");
    
exports.run = (client, message, args) =>{
    const {member, mentions } = message

        const tag = `<@${member.id}>`
        if(message.guild.me.hasPermission('BAN_MEMBERS')){        
            if(
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('BAN_MEMBERS')){
                const target = mentions.users.first()
                if(target){
                    const targetMember = message.guild.members.cache.get(target.id)
                    targetMember.ban()
                    const kick = new discord.MessageEmbed()
                    .setColor('#e6350e')
                    .setTitle(`User Banned`)
                    .addField("User",`${target} was banned from the server!`)
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
            message.channel.send(`${tag} Sorry I dont have permission to Ban Members!`)
        }

}