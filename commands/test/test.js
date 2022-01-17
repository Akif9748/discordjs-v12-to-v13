const Discord = require('discord.js')


exports.run = (client, message, args) => {

    const embed = new Discord.MessageEmbed()
        .addField("Client Ping:", `${client.ws.ping} ms`)
        .addField("Message Ping:", `${Date.now() - message.createdTimestamp} ms`)

   return message.channel.send(embed);


};

exports.help = {
    name: ['ping',"p"],
    description: 'Botun Pingini Gösterir!',
    usage: 'ping'
};
