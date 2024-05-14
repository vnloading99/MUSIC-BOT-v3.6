const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "resume",
  description: "Bắt đầu dừng nhạc",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);

    try {
      if (!queue) {
        return interaction.reply({ content: '⚠️ Hàng đợi trống rỗng!!', ephemeral: true });
      }

      if (!queue.paused) {
        return interaction.reply({ content: '⚠️ Không thể dừng!!', ephemeral: true });
      }

      const success = queue.resume();

      const embed = new EmbedBuilder()
        .setColor('#7645fe')
        .setAuthor({
          name: 'Bài hát tiếp tục phát',
          iconURL: 'https://cdn.discordapp.com/attachments/1235520801185337346/1237021270126624808/2024.png?ex=6644ad55&is=66435bd5&hm=126762ff956c4c0ce2ae7860943d7cda453742dff18139a2fad16d6ad6b8c49b&',
          url: 'https://discord.gg/loading99'
        })
        .setDescription(success ? '**Âm nhạc trở lại sống động!!**' : '❌ Lỗi: Không thể tiếp tục phát nhạc')
        

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
