const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Lista de respuestas aleatorias
const respuestas = [
  'Q onda tirri',
  'CRIZMAN HOMOSEXUAL',
  'wachinnnnn',
  'el perro pierde la maña, pero no el cooooosoooo oooooaaa',
  'kiler eres un imbecil :(',
  'Q ONDA CHANGO',
];

client.once('ready', () => {
  console.log('Bot está online');
});

client.on('messageCreate', (message) => {
  // Verifica si el bot fue mencionado en el mensaje
  if (message.mentions.has(client.user)) {
    // Elige una respuesta aleatoria del array
    const respuestaAleatoria = respuestas[Math.floor(Math.random() * respuestas.length)];
    // Responde con la respuesta aleatoria
    message.reply(respuestaAleatoria);
  }
});

client.login(process.env.DISCORD_TOKEN);
