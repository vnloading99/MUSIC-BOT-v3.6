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
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Nhận thông tin về bot và các lệnh.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Lệnh**')
        .addFields(
          { name: '🎹 Play', value: 'Phát một bài hát từ một liên kết hoặc văn bản được cung cấp từ các nguồn.' },
          { name: '⏹️ Stop', value: 'Dừng phát nhạc và rời khỏi kênh thoại.' },
          { name: '📊 Queue', value: 'Xem và quản lý hàng đợi bài hát của máy chủ này.' },
          { name: '⏭️ Skip', value: 'Bỏ qua bài hát đang phát hiện tại.' },
          { name: '⏸️ Pause', value: 'Tạm dừng bài hát đang phát hiện tại.' },
          { name: '▶️ Resume', value: 'Tiếp tục phát bài hát đã tạm dừng.' },
          { name: '🔁 Loop', value: 'Bật/Tắt chế độ lặp lại cho hàng đợi và bài hát hiện tại.' },
          { name: '🔄 Autoplay', value: 'Bật hoặc tắt chế độ tự động phát (phát ngẫu nhiên các bài hát)].' },
          { name: '⏩ Seek', value: 'Di chuyển đến một thời điểm cụ thể trong bài hát hiện tại.' },
          { name: '⏮️ Previous', value: 'Phát bài hát trước đó trong hàng đợi.' },
          { name: '🔀 Shuffle', value: 'Xáo trộn các bài hát trong hàng đợi.' },
          { name: '📃 playlist', value: 'Quản lý danh sách phát' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1235520801185337346/1237021270126624808/2024.png?ex=66440495&is=6642b315&hm=84b2772d1fca2179f3bc3532123c93ba127ef5f84c3171262509052bed991236&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Lệnh Cơ Bản**')
        .addFields(
          { name: '🏓 Ping', value: "Kiểm tra độ trễ của bot." },
          { name: '🗑️ Clear', value: 'Xóa sạch hàng đợi bài hát của máy chủ này.' },
          { name: '⏱️ Time', value: 'Hiển thị thời gian phát hiện tại của bài hát.' },
          { name: '🎧 Filter', value: 'Áp dụng bộ lọc để cải thiện âm thanh theo ý thích của bạn.' },
           { name: '🎵 Now Playing', value: 'Hiển thị thông tin về bài hát đang phát hiện tại.' },
          { name: '🔊 Volume', value: 'Điều chỉnh âm lượng nhạc [nghe ở âm lượng cao có nguy cơ].' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1235520801185337346/1237021270126624808/2024.png?ex=66440495&is=6642b315&hm=84b2772d1fca2179f3bc3532123c93ba127ef5f84c3171262509052bed991236&')
      const button1 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/loading99')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/loading99')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/loading99')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
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
