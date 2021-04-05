const BaseCommand = require('../../utils/structures/BaseCommand');

const fetch = require('node-fetch');

module.exports = class FortuneCommand extends BaseCommand {
  constructor() {
    super('fortune', 'chat', [], false, 'Gives you a fortune.');
  }

  run(client, message, args) {
    fetch('http://yerkee.com/api/fortune')
    .then(res => res.json())
    .then(json => message.reply(json.fortune))
    .catch(err => {
        message.channel.send('We could not find you a fortune :confused:\nIf you think you have found a bug or glitch, please report it on the offical Frodo discord: https://discord.gg/ApvUar6');
        return console.error(err);
    });
  }
}