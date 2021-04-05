const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RollCommand extends BaseCommand {
  constructor() {
    super('roll', 'utility', [], false, 'Rolls a dice of any size any amount of times. ``roll <size> <number>``', false);
  }

  run(client, message, args) {
    if (args.length) {
      if (args.length == 1) {
        message.reply(`You got: ${Math.floor(Math.random() * parseInt(args[0])) + 1}`)
      } else {
        let result = ''
        for (let i = 0; i <= parseInt(args[1]); i++) {
          result += `${Math.floor(Math.random() * parseInt(args[0])) + 1}\n`;
        }
        message.reply(`You got:\n\`\`\`${result}\`\`\``);
      }
    } else {
      message.reply(`You got: ${Math.floor(Math.random() * 6) + 1}`)
    }
  }
}