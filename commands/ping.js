//Modulo para criar comandos de Barra
const { SlashCommandBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;
//exportar os dados
module.exports = {
    cooldown:5,
    //cria o construtor de comandos de barra, após criar é possivel usar os seus métodos
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    //ephemeral: true  tem que ver com privado
    await interaction.reply("reposta");
    //const message = await interaction.fetchReply();
    //console.log(message);
    await interaction.deferReply();
    await wait(4000);
    await interaction.editReply('Pong!');
    await interaction.deleteReply(); // elimina a resposta anterior
    await interaction.followUp('Pong again!'); //o bot escreve PONG
  },
};
