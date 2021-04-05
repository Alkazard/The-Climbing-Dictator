const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = class TempmuteCommand extends BaseCommand {
  constructor() {
    super('tempmute', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('You do not have permission to use this command.');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I require \`MANAGE_ROLES\` permission to tempmute.');

    const muteRole = message.guild.roles.cache.get('816335415107780628');
    const memberRole = message.guild.roles.cache.get('810692758272606208');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let time = args[1];
    let reason = args.slice(2).join(" ");
    const tempmuteEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been muted in ${message.guild.name}.`)
      .addField(`Duration: ${time}` , `Reason: ${reason}`)
      .setTimestamp();

    if (!args[0]) return message.channel.send('You must state a member to tempmute with a duration of time. \`t!tempmute @user time reason\`');
    if (!mentionedMember) return message.channel.send('The member stated is not in the server.');
    if (!mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('You cannot tempmute a user with the same role or role higher than you.');
    if (!time) return message.channel.send('You must state a duration of time. `\t!tempute @user time reason\``');
    if (!reason) reason = 'No reason given';

    await mentionedMember.roles.add(muteRole.id).catch(err => console.log(err));
    await mentionedMember.roles.remove(memberRole.id).catch(err => console.log(err));
    await mentionedMember.send(tempmuteEmbed).catch(err => console.log(err));

    setTimeout(async function () {
      await mentionedMember.roles.add(memberRole.id).catch(err => console.log(err));
      await mentionedMember.roles.remove(muteRole.id).catch(err => console.log(err));
      await mentionedMember.send(`Your mute has been lifted in ${message.guild.me}.`).catch(err => console.log(err));
    }, ms(time));
  }
}