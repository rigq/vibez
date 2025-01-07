require('dotenv').config(); // Carga las variables de entorno

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Usa el token desde process.env
const TOKEN = process.env.DISCORD_TOKEN;

client.once('ready', () => {
    console.log(`Bot conectado como ${client.user.tag}`);
});

client.login(TOKEN);