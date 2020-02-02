let tempete = false;
const prefix = "!";


module.exports = (bot, message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const isAdmin = message.member.hasPermission("ADMINISTRATOR");
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  const hasParam = typeof args[0] !== "undefined";

  if (!bot.commands.has(command)) return;

  message.delete();

  if (command === "reboot" && hasParam && isAdmin && !tempete) {
    tempete = true;
    bot.commands.get("reboot").execute(message, args);
  } else if (command === "ip") {
    bot.commands.get("ip").execute(message, args);
  } else if (command === "up" && isAdmin && tempete) {
    tempete = false;
    bot.commands.get("up").execute(message, args);
  } else if (command === "clear" && hasParam && isAdmin) {
    bot.commands.get("clear").execute(message, args);
  }
};
