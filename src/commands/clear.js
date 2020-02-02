module.exports = {
  name: "clear",
  description: "Supprime le nombre de message.",
  async execute(message, args) {
    const messages = await message.channel.fetchMessages({
      limit: parseInt(args[0])
    });
    await message.channel.bulkDelete(messages);
  }
};
