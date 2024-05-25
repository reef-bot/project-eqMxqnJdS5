const Discord = require('discord.js');
const client = new Discord.Client();
const commandHandler = require('./utils/commandHandler.js');
const config = require('./config/settings.json');

client.on('ready', () => {
  console.log('Bot is ready');
});

client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  commandHandler.handleCommand(message, client);
});

client.login('YOUR_DISCORD_BOT_TOKEN');