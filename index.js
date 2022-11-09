const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: Object.values(GatewayIntentBits).reduce((a, b) => a | b)
});
const logger = require("signale");
require("dotenv").config();

client.once("ready", () => {
    if (!client.user) {
        logger.fatal("client.user isn't defined.")
        return;
    }else{
        logger.success(`Logged in as ${client.user.tag}!!`)
    }
}).on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith("&")) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === "ping") {
        message.channel.send({
            embeds: [
                new EmbedBuilder()
                .setTitle("Ping!:ping_pong:")
                .setDescription(client.ws.ping + "ms")
                .setTimestamp()
            ]
        })
    }
})

if (!process.env.BOT_TOKEN) {
    return;
}else{
    client.login(process.env.BOT_TOKEN)
}