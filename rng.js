const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rng')
        .setDescription('Generates a random number within the specified range.')
        .addIntegerOption(option => 
            option.setName('min')
                .setDescription('The minimum number of the range')
                .setRequired(true))
        .addIntegerOption(option => 
            option.setName('max')
                .setDescription('The maximum number of the range')
                .setRequired(true)),
    async execute(interaction) {
        const min = interaction.options.getInteger('min');
        const max = interaction.options.getInteger('max');

        if (min > max) {
            return interaction.reply('Please ensure the minimum number is less than or equal to the maximum number.');
        }

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        await interaction.reply(`Your number is ${randomNumber} `);
    },
};
