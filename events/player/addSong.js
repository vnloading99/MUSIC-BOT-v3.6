const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
        .setAuthor({
        name: 'Đã thêm vào hàng đợi',
        iconURL: 'https://cdn.discordapp.com/attachments/1235520801185337346/1237021270126624808/2024.png?ex=66440495&is=6642b315&hm=84b2772d1fca2179f3bc3532123c93ba127ef5f84c3171262509052bed991236&', 
        url: 'https://discord.gg/loading99'
    })
        .setDescription(`<@${song.user.id}>, **${song.name}**`)
        .setColor('#14bdff')
        .setFooter({ text: 'Sử dụng /queue để biết thêm thông tin' });
      queue?.textChannel?.send({ embeds: [embed] }).catch(e => { });
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
