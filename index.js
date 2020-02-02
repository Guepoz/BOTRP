require("dotenv").config();

const fs = require("fs");

const Discord = require("discord.js");

const bot = new Discord.Client();

bot.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./src/commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./src/commands/${file}`);
  console.log(`Loaded command: ${file}`);
  bot.commands.set(command.name, command);
}

const eventFiles = fs
  .readdirSync("./src/events")
  .filter(file => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./src/events/${file}`);
  let eventName = file.split(".")[0];
  console.log(`Loaded event: ${file}`);
  bot.on(eventName, event.bind(null, bot));
}

bot.login(process.env.BOT_TOKEN);
