const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'utility', ['pfp', 'icon'], false, 'Sends someones avatar.', false);
  }

  run(client, message, args) {
    if (!args.length) sendAvatar('Your Avatar', message.author);
    message.mentions.users.map(user => {
        sendAvatar(`${user.username}'s Avatar`, user);
    });

    function sendAvatar(title, target) {
        message.channel.send(
          new MessageEmbed()
            .setTitle(title)
            .setColor("#007bff")
            .setTimestamp()
            .setImage(target.displayAvatarURL({ dynamic: true }))
        );
    }
  }
}
