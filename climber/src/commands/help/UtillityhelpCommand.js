const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UtillityhelpCommand extends BaseCommand {
  constructor() {
    super('utillityhelp', 'help', []);
  }

  async run(client, message, args) {
    let embed = new Discord.MessageEmbed()
                    .setTitle("**Utillity Help GUI**")
                    .setDescription('`>ping` - Sends the ping of the bot.\n`>mm` - Sends total member count.')
                    .setColor("#007bff")
                    .setTimestamp()
                    .setFooter('Made by Alkazar#0001')
                message.channel.send(embed)
  }
}
