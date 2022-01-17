const fs = require("fs")

fs.readdirSync('./commands').forEach(dir => {
    const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) { //KOMUT DOSYALARI ÜZERİNDEN KOMUT AYARI:

        var data = fs.readFileSync(`./commands/${dir}/${file}`, "utf-8");


        if (!data.includes("const embed") &&!data.includes("let embed") &&!data.includes("var embed") && data.includes("MessageEmbed()")) {
            console.log("Embed Problem!   ", dir + "/" + file)
        }

        if (data.includes(".createReactionCollector")) {
            console.log("(Hata olmayabilir, sadece kolaçan et) createReactionCollector   ", dir + "/" + file)
        }

        if (data.includes(".awaitReactions")) {
            console.log("(Hata olmayabilir, sadece kolaçan et) awaitReactions  ", dir + "/" + file)
        }

        if (data.includes(".awaitMessages")) {
            console.log("(Hata olmayabilir, sadece kolaçan et) .awaitMessages   ", dir + "/" + file)
        }

        //Addfieldste toString gerek ya
        if (data.includes("addField")) {
            //   console.log("Embed warn! (To string)   ", dir+"/"+file)
        }


        //Botun davet linki olabilir
        if (data.includes("permissions")) {
            console.log("(Botun davet linki olabilir) Permisson  ", dir + "/" + file)
        }

        if (data.includes("unknown")) {
            console.log("unknown   ", dir + "/" + file)
        }

        if (data.includes("setPresence")) {
            console.log("setPresence   ", dir + "/" + file)
        }

        if (data.includes("fetchVanityCode")) {
            console.log("fetchVanityCode   ", dir + "/" + file)
        }
        if (data.includes(".owner")) {
            console.log("guild.owner   ", dir + "/" + file)
        }


        if (data.includes(" .voice")) {
            console.log("guild.voice   ", dir + "/" + file)
        }
        if (data.includes(".ban")) {
            console.log("(Hata olmayabilir, sadece kolaçan et) ban  ", dir + "/" + file)
        }
        if (data.includes(".kick")) {
            console.log("(Hata olmayabilir, sadece kolaçan et) kick   ", dir + "/" + file)
        }




        if (data.includes(".delete")) {
            console.log("(Hata olmayabilir, sadece kolaçan et) delete() .   ", dir + "/" + file)
        }
        if (data.includes("roles.create")) {
            console.log("roles.create   ", dir + "/" + file)
        }
        if (data.includes("WebhookClient")) {
            console.log("(Hata olmayabilir, sadece kolaçan et) WebhookClient  ", dir + "/" + file)
        }
        if (data.includes("Typing")) {
            console.log("(Hata olmayabilir, sadece kolaçan et) Typing  ", dir + "/" + file)
        }





        const newData = data
            .replace(/.send\(embed\)/g, ".send({embeds: [embed]})")
            .replace(/.reply\(embed\)/g, ".reply({embeds: [embed]})")


            .replace(/.ownerID/g, ".ownerId")
            .replace(/.channelID/g, ".channelId")
            .replace(/CUSTOM_STATUS/g, "CUSTOM")
          //  .replace(/text/g, `GUILD_TEXT`)
          //  .replace(/dm/g, `DM`)
            .replace(/category/g, `GUILD_CATEGORY`)
            // .replace(/message/g, `messageCreate`)//Bunu kullanmayın
            .replace(/.fetchBans/g, `.bans.fetch`)
            .replace(/.fetchInvites/g, `.invites.fetch`)
            .replace(/.member\(/g, `.members.cache.get(`)
            .replace(/.overwritePermissions\(/g, `.permissionOverwrites.set(`)


            .replace(/.updateOverwrite/g, `.permissionOverwrites.edit`)
            .replace(/.hasPermission/g, `.permissions.has`)
            .replace(/.createOverwrite/g, `.permissionOverwrites.create`)

            .replace(/MANAGE_EMOJIS/g, `MANAGE_EMOJIS_AND_STICKERS`)
            .replace(/DISCORD_PARTNER/g, `PARTNERED_SERVER_OWNER`)
            .replace(/VERIFIED_DEVELOPER/g, `EARLY_VERIFIED_BOT_DEVELOPER`)



            .replace(/.addMember/g, `.members.add`)

        fs.writeFileSync(`./commandsV13/${dir}/${file}`, newData)

    }
})



