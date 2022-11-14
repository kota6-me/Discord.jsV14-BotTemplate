const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: Object.values(GatewayIntentBits).reduce((a, b) => a | b)
});
const logger = require("signale");