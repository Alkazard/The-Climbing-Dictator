const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderation', []);
  }

  async run (client, message, args) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You do not have permission to use this command.")

    let reason = args.join(" ");
    const nukeChannel = message.channel;

    if(!reason) reason = "No reason";
    if(!nukeChannel.deletable) return message.channel.send("I cant nuke this channel");

     await nukeChannel.clone()
     await nukeChannel.delete();

  }
}
