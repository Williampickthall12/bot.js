exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    message.channel.send('https://www.youtube.com/channel/UC_GQ4mac4oN3wl1UdbFuTEA')
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['ibxtoycat', 'toycatlink'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'toycat',
  category: 'Fun',
  description: 'Returns a link to Toycat's channel',
  usage: 'toycat'
};