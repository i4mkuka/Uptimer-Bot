const { MessageEmbed, MessageActionRow, MessageButton, Message } = require("discord.js");
const Discord = require("discord.js");
let os = require("os");
const { owners, botid } = require("../../config.json");

module.exports = {
  name: "botinfo",
  description: "returns bot info",
        ownerOnly: false,
  run: async (client, message, args) => {
          const owner = owners;
    const row = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${botid}&permissions=8&scope=bot%20applications.commands`)
        .setLabel("Invite")
            .setStyle("LINK")
    )
          const row1 = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://discord.gg/zp8nTQqD9h`)
        .setLabel("Support Server")
            .setStyle("LINK")
    )
          const row2 = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://www.youtube.com/c/decoders1`)
        .setLabel("Subscribe")
            .setStyle("LINK")
    )

    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
             let devs = []
    owner.map(r => devs.push(r));
    

    const embedstats = new MessageEmbed()
        .setAuthor(`${message.member.user.tag}Statistics`)
            
.addField("<a:developer_badge:906786359925170176>  Developer", devs.map(r => {
        r = client.users.cache.get(r);
        if (!r)
          return r = "\`Unknown User#0000\`";
        else
          return `\`${
            r.tag
            }\``;

      }).join(", "))
      .addField("<:djsguide:913399355824799804> Library", `\`Discord Js ${Discord.version}\``)
      .addField("⏱️ Uptime", `\`${days}d ${hours}h ${minutes}m ${seconds}s\``)
      .setColor("RANDOM")
      .addFields(
        {
          name: "📡 Total Guilds: ",
          value: `\`${client.guilds.cache.size} Guilds\``,
          inline: true
        },
        {
          name: "👥 Total Users: ",
          value: `\`${client.users.cache.size} Users\``,
          inline: true
        },
        {
          name: "🖥️ Total Channels: ",
          value: `\`${client.channels.cache.size} Channels\``,
          inline: true
        },
        {
          name: "📁 Total Commands: ",
          value: `\`${client.commands.size} cmds\``,
          inline: true
        })
      .addField("💡 Bot Latency", `\`${Math.round(client.ws.ping)}ms\``)
       .setThumbnail(message.member.user.displayAvatarURL())
      .setFooter(`${client.user.tag}`)
      .setTimestamp()
   return message.channel.send({ components: [row, row1, row2], embeds: [embedstats] })
  }
}
