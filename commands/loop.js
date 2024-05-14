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
const db = require("../mongoDB");
module.exports = {
  name: "loop",
  description: "Turns the music loop mode on or off.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    
    try {
      const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: '⚠️ Không có nhạc đang phát!!', ephemeral: true }).catch(e => { })
  
      let button = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("Queue")
          .setStyle(ButtonStyle.Secondary)
          .setCustomId("queue"),
        new ButtonBuilder()
          .setLabel("Current Song")
          .setStyle(ButtonStyle.Secondary)
          .setCustomId("nowplaying"),
        new ButtonBuilder()
          .setLabel("Stop Loop!")
          .setStyle(ButtonStyle.Danger)
          .setCustomId("close")
      )

      const embed = new EmbedBuilder()
        .setColor('#fc4e03')
        .setAuthor({
        name: 'Loop Your Melodies',
        iconURL: 'https://cdn.discordapp.com/attachments/1235520801185337346/1237021270126624808/2024.png?ex=66440495&is=6642b315&hm=84b2772d1fca2179f3bc3532123c93ba127ef5f84c3171262509052bed991236&', 
        url: 'https://discord.gg/loading99'
    })
        .setDescription('**Đang lặp lại! Hãy để âm nhạc phát mãi mãi. **')
     
      interaction?.reply({ embeds: [embed], components: [button], fetchReply: true }).then(async Message => {

        const filter = i => i.user.id === interaction.user.id
        let col = await Message.createMessageComponentCollector({ filter, time: 120000 });

        col.on('collect', async (button) => {
          if (button.user.id !== interaction.user.id) return
          const queue1 = client.player.getQueue(interaction.guild.id);
          if (!queue1 || !queue1.playing) {
            await interaction?.editReply({ content: '⚠️ Không có nhạc đang phát!!', ephemeral: true }).catch(e => { })
            await button?.deferUpdate().catch(e => {})
          }
          switch (button.customId) {
            case 'queue':
              const success = queue.setRepeatMode(2);
              interaction?.editReply({ content: `✅ Lặp lại hàng đợi!!` }).catch(e => { })
              await button?.deferUpdate().catch(e => {})
              break
            case 'nowplaying':
              const success2 = queue.setRepeatMode(1);
              interaction?.editReply({ content: `✅ Lặp lại đã được kích hoạt!!` }).catch(e => { })
              await button?.deferUpdate().catch(e => {})
              break
            case 'close':
              if (queue.repeatMode === 0) {
                await button?.deferUpdate().catch(e => {})
                return interaction?.editReply({ content: '⚠️ Lặp lại đã được tắt!!', ephemeral: true }).catch(e => { })
              }
              const success4 = queue.setRepeatMode(0);
              interaction?.editReply({ content: '▶️ Lặp lại đã được tắt.' }).catch(e => { })
              await button?.deferUpdate().catch(e => {})
              break
          }
        })
        col.on('end', async (button) => {
          button = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setStyle(ButtonStyle.Secondary)
              .setLabel("Timeout")
              .setCustomId("timeend")
              .setDisabled(true))

          const embed = new EmbedBuilder()
            .setColor('#fc5203')
            .setTitle('▶️ Lặp lại đã được tắt!!')
            .setTimestamp()

          await interaction?.editReply({ content: "", embeds: [embed], components: [button] }).catch(e => { });
        })
      }).catch(e => { })

    } catch (e) {
    console.error(e); 
  }
  }
}
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
