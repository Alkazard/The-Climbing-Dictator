const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RulesCommand extends BaseCommand {
  constructor() {
    super('rules', 'rules', []);
  }

  run(client, message, args) {
    message.channel.send('rules command works');
  }
}