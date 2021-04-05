const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  run(client, message, args) {
   const messageTosay = args.join(" ")
   const sayembed = new Discord.MessageEmbed()
   .setTitle(`${message.author.tag} said ${messageTosay}`)
   .setColor("#007bff")
   .setTimestamp();
   try {
     message.channel.send(sayembed)
   } catch (err) {
     console.log(err)
     message.channel.send("Error with that")
   }
  }
}
