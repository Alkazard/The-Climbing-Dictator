const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('You do not have permission to use this command.');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I require \`MAMAGE_ROLES\` permission to mute.");

    let reason = args.slice(1).join(" ");
    const muteRole = message.guild.roles.cache.get('816335415107780628');
    const memberRole = message.guild.roles.cache.get('810692758272606208');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const muteEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been muted in ${message.guild.name}`)
      .setDescription(`Reason for being muted: ${reason}`)
      .setColor("#2796f7")
      .setTimestamp();

    if (!args[0]) return message.channel.send(`\`h!mute @member reason\``);
    if (!mentionedMember) return message.channel.send('The member mentioned is not in the server.');
    if (mentionedMember.user.id == message.author.id) return message.channel.send('You cannot mute yourself.');
    if (mentionedMember.user.id == client.user.id) return message.channel.send('You cannot mute me with my own command.');
    if (!reason) reason - 'No reason given.';
    if (mentionedMember.roles.cache.has(muteRole.id)) return message.channel.send('This member is already muted.');
    if (message.member.roles.highest.position <= mentionedMember.roles.highest.position) return message.channel.send('You cannot mute someone with the same role or higher role than you.');

    await mentionedMember.send(muteEmbed).catch(err => console.Log(err));
    await mentionedMember.roles.add(muteRole.id).catch(err => console.logg(err).then(message.channel.send('There was an issue giving the mute role.')));
    await mentionedMember.roles.remove(memberRole.id).catch(err => console.Log(err).then(message.channel.send('There was an issue removeing the member role.')));

  }
}
