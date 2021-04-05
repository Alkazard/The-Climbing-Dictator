const BaseCommand = require('../../utils/structures/BaseCommand');

const fetch = require('node-fetch');

module.exports = class JokeCommand extends BaseCommand {
  constructor() {
    super('joke', 'chat', [], false, 'Gives you a joke.');
  }

  run(client, message, args) {
    fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist')
            .then(res => res.json())
            .then(json => {
                if (json.setup) {
                    message.channel.send(`${json.setup}\n${json.delivery}`);
                } else if (json.joke) {
                    message.channel.send(`${json.joke}`);
                } else if (json.additionalInfo) {
                    message.channel.send(json.additionalInfo);
                }
            })
            .catch(err => {
                message.channel.send('We could not find a joke that matches your filters.\nIf you think you have found a bug or glitch, please report it on the offical Frodo discord: https://discord.gg/ApvUar6');
                return console.error(err);
            });
  }
}