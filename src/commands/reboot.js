module.exports = {
  name: "reboot",
  description: "Commence un reboot.",
  async execute(message, args) {
    await message.channel.send("@everyone");
    await message.channel.send({
      embed: {
        color: 3447003,
        title: infinityMessages.RebootTitle,
        description: infinityMessages.RebootMessage(args[0])
      }
    });
  }
};
