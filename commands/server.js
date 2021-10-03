const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('Server')
        .setDescription('Replies with Server Info!'),
    async execute(interaction) {
        await interaction.reply(`Server Name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`)
    }
}
