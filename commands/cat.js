//Modulo para criar comandos de Barra
const { SlashCommandBuilder } = require("discord.js");
const { request } = require("undici");

const wait = require('node:timers/promises').setTimeout;

//exportar os dados
module.exports = {
  //cria o construtor de comandos de barra, após criar é possivel usar os seus métodos
  data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("Generate random cat"),
  async execute(interaction) {
    await interaction.reply("Cant generate yet");
    await wait(3000); 
		await interaction.editReply('exiting');// edita a reposta passados 3 segundos
  },
};
