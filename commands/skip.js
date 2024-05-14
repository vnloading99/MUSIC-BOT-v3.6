/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "skip",
  description: "Chuyển đổi bài hát đang phát.",
  permissions: "0x0000000000000800",
  options: [{
    name: "number",
    description: "Hãy cho biết bạn muốn bỏ qua bao nhiêu bài hát.",
    type: ApplicationCommandOptionType.Number,
    required: false
  }],
  voiceChannel: true,
  run: async (client, interaction) => {
    
    try {

      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: '⚠️ Không có nhạc đang phát!!', ephemeral: true }).catch(e => { })

      let number = interaction.options.getNumber('number');
      if (number) {
        if (!queue.songs.length > number) return interaction.reply({ content: '⚠️ Đã vượt quá số bài hát hiện tại.', ephemeral: true }).catch(e => { })
        if (isNaN(number)) return interaction.reply({ content: '⚠️ Số không hợp lệ.', ephemeral: true }).catch(e => { })
        if (1 > number) return interaction.reply({ content: '⚠️ Số không hợp lệ.', ephemeral: true }).catch(e => { })

        try {
        let old = queue.songs[0];
        await client.player.jump(interaction, number).then(song => {
          return interaction.reply({ content: `⏯️ Đã bỏ qua : **${old.name}**` }).catch(e => { })
        })
      } catch(e){
        return interaction.reply({ content: '❌ Hàng đợi đang trống!!', ephemeral: true }).catch(e => { })
      }
      } else {
try {
  const queue = client.player.getQueue(interaction.guild.id);
  if (!queue || !queue.playing) {
    return interaction.reply({ content: '⚠️ Không có nhạc đang phát!!', ephemeral: true });
  }

  let old = queue.songs[0];
  const success = await queue.skip();

  const embed = new EmbedBuilder()
    .setColor('#3498db')
    .setAuthor({
      name: 'Chuyển Bài',
      iconURL: 'https://cdn.discordapp.com/attachments/1235520801185337346/1237021270126624808/2024.png?ex=6644ad55&is=66435bd5&hm=126762ff956c4c0ce2ae7860943d7cda453742dff18139a2fad16d6ad6b8c49b&',
      url: 'https://discord.gg/loading99'
    })
    .setDescription(success ? ` **TẠM DỪNG** : **${old.name}**` : '❌ Hàng đợi đang trống!!')
    .setTimestamp();

  return interaction.reply({ embeds: [embed] });
}catch (e) {
          return interaction.reply({ content: '❌ Hàng đợi đang trống!!', ephemeral: true }).catch(e => { })
        }
      }

    } catch (e) {
    console.error(e); 
  }
  },
};
/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
