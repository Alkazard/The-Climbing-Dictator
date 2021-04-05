const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UunmuteCommand extends BaseCommand {
  constructor() {
    super('uunmute', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('You do not have permission to use this command.');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I require \`MAMAGE_ROLES\` permission to mute.");

    let reason = args.slice(1).join(" ");
    const muteRole = message.guild.roles.cache.get('811547095437541386');
    const memberRole = message.guild.roles.cache.get('811546892273582110');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const muteEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been unmuted in ${message.guild.name}`)
      .setDescription(`Reason for being unmuted: ${reason}`)
      .setColor("#2796f7")
      .setTimestamp();

    if (!args[0]) return message.channel.send(`\`h!unmute @member reason\``);
    if (!mentionedMember) return message.channel.send('The member mentioned is not in the server.');
    if (mentionedMember.user.id == message.author.id) return message.channel.send('You cannot mute yourself.');
    if (mentionedMember.user.id == client.user.id) return message.channel.send('You cannot mute me with my own command.');
    if (!reason) reason - 'No reason given.';
    if (mentionedMember.roles.cache.has(memberRole.id)) return message.channel.send('This member is unalready muted.');
    if (message.member.roles.highest.position <= mentionedMember.roles.highest.position) return message.channel.send('You cannot unmute someone with the same role or higher role than you.');

    await mentionedMember.send(unmuteEmbed).catch(err => console.Log(err));
    await mentionedMember.roles.add(memberRole.id).catch(err => console.logg(err).then(message.channel.send('There was an issue giving the member role.')));
    await mentionedMember.roles.remove(muteRole.id).catch(err => console.Log(err).then(message.channel.send('There was an issue removeing the mute role.')));
  }
}
