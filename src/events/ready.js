module.exports = bot => {
  bot.user
    .setActivity("🌌Infinity RolePlay", { type: "WATCHING" })
    .catch(console.error);
};
