const { Client, GatewayIntentBits } = require('discord.js');
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
})

if (!process.env.BOT_TOKEN) {
    return;
}else{
    client.login(process.env.BOT_TOKEN)
}