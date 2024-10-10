const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('charon')
        .setDescription('Generates a random number between 1 and 61 for knife.'),
    async execute(interaction) {
        const randomNumber = Math.floor(Math.random() * 61) + 1;
        await interaction.reply(`May I suggest knife ${randomNumber}, Mr. Wick.`);
    },
};
