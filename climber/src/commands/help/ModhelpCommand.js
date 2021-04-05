const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ModhelpCommand extends BaseCommand {
  constructor() {
    super('modhelp', 'help', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("You do not have permssion to use this command.");
    let embed = new Discord.MessageEmbed()
                    .setTitle("**Moderation Help GUI**")
                    .setDescription('`>kick @user reason` - Kickes a user from the server.\n`>ban @user reason` - Bans a user from the server.\n`>mute @user reason` - mutes the user until a member of staff unmutes them.\n`>tempmute @user time reason` - Temporatily mutes the user.\n`>unban user ID reason` - Unbans the user from the server. \n`>unmute @user reason` - Unmutes the user.\n`>nuke` - Wipes the channel the command is sent in.')
                    .setColor("#007bff")
                    .setTimestamp()
                    .setFooter('Made by Alkazar#0001')
                message.channel.send(embed)
  }
}
