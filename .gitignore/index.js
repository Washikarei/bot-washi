const discord = require('discord.js');
const bot = new discord.Client();
const prefix = ("/");
const help_embed = new discord.RichEmbed()
    .setColor('#00E329')
    .addField("Commande du Bot !", "-/Help : Affiche les commandes d'aide du bot !");


bot.on('ready', () => {
    console.log("Je suis Ready !");
  });

bot.on('ready', function (){
    bot.user.setPresence({game: {name: 'Bot de Washi (Test)'}}).catch(console.error);
});

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send(help_embed)
        console.log("Commande d'aide demandé.");
    };
    
    
});

bot.login(process.env.TOKEN);