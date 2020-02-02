module.exports = {
  name: "up",
  description: "Donne le up",
  async execute(message, args) {
    await message.channel.send("@everyone");
    await message.channel.send({
      embed: {
        color: 3447003,
        title: infinityMessages.UpTitle,
        description: infinityMessages.UpMessage
      }
    });
  }
};
