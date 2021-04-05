const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help','help', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("You do not have permssion to use this command.");
    let embed = new Discord.MessageEmbed()
                    .setTitle("**Help GUI**")
                    .setDescription('`>funhelp` - Shows all the fun commands.\n`>utilityhelp` - Shows all the utility commands.\n`>modhelp` - Shows all the moderation commands (Requires staff permissions).')
                    .setColor("#007bff")
                    .setTimestamp()
                    .setFooter('Made by Alkazar#0001')
                message.channel.send(embed)
  }
}
