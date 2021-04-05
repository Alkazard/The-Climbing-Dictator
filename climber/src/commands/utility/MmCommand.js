const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ServerCommand extends BaseCommand {
  constructor() {
    super('mm', 'utility', ['info'], true, 'Sends server info.', false);
  }

  run(client, message, args) {
    message.channel.send(
      new MessageEmbed()
        .setTitle(`Server info for ${message.guild.name}:`)
        .setColor("#007bff")
        .setTimestamp()
        .setDescription(`Total Members: ${message.guild.memberCount}`)
        .setThumbnail(message.guild.iconURL())
    )
  }
}
