const { EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "nowplaying",
  description: "get info of current song.",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: `⚠️ Không có nhạc đang phát!!`, ephemeral: true }).catch(e => { })

      const track = queue.songs[0];
      if (!track) return interaction.reply({ content: `⚠️ Không có nhạc đang phát!!`, ephemeral: true }).catch(e => { })

      const embed = new EmbedBuilder();
      embed.setColor(client.config.embedColor);
      embed.setThumbnail(track.thumbnail);
      embed.setTitle(track.name)
      embed.setDescription(`> **Âm nhạc:** \`%${queue.volume}\`
> **Thời lượng :** \`${track.formattedDuration}\`
> **Địa chỉ URL :** **${track.url}**
> **Chế độ lặp lại :** \`${queue.repeatMode ? (queue.repeatMode === 2 ? 'Tất cả Hàng đợi' : 'Bài hát này') : 'Off'}\`
> **Bộ lọc**: \`${queue.filters.names.join(', ') || 'Off'}\`
> **Bởi :** <@${track.user.id}>`);


      interaction.reply({ embeds: [embed] }).catch(e => { })

    }  catch (e) {
    console.error(e); 
  }
  },
};
