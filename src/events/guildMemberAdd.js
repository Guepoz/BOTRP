module.exports = async (bot, member) => {
  const defaultChannel = member.guild.channels.find(
    channel => channel.name === "✈arriver-départ✈"
  );
  const role = member.guild.roles.find("name", "🛬 Immigrants");

  await defaultChannel
    .send({
      embed: {
        color: 3447003,
        title: infinityMessages.Username(member.user.username),
        description: infinityMessages.Greeting
      }
    })
    .catch(console.error);

  await member.addRole(role);
};
