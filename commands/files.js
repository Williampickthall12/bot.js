const exec = require('child_process').exec
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    const execute = (command) => {

      message.channel.send('The files are in your DM\'s!');
      exec(command, (err, stdout, stderr) => {
        message.author.send('**'+stdout+'**');
        if (err || stderr) {
          if (err) {
            message.author.send('```'+err+'```');
          }

          if (stderr) {
            message.author.send('```'+stderr+'```');
          }

          message.channel.send('Shell Error.');
        }
      });
    }

    execute('ls');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['fls', 'ls', 'fl'],
  guildOnly: false,
  permLevel: 'Bot Support'
};

exports.help = {
  name: 'files',
  category: 'System',
  description: 'Returns all of the files in the directory',
  usage: 'files'
};
