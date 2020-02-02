module.exports = {
  name: "ip",
  description: "Donne l'ip du serveur",
  async execute(message, args) {
    await message.channel.send({
      embed: {
        color: 3447003,
        title: infinityMessages.Ip,
        description: infinityMessages.IpMessage
      }
    });
  }
};
