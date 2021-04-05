const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class FunhelpCommand extends BaseCommand {
  constructor() {
    super('funhelp', 'help', []);
  }

  async run(client, message, args) {
    let embed = new Discord.MessageEmbed()
                    .setTitle("**Fun Help GUI**")
                    .setDescription('`>avatar @user` - Displays the avatar of the mentioned user.\n`>roll` - Roles a dice.\n`>meme` - Sends a meme.\n`>say message` - Makes the bot send your message in an embed.')
                    .setColor("#007bff")
                    .setTimestamp()
                    .setFooter('Made by Alkazar#0001')
                message.channel.send(embed)
  }
}
