const discord = require('discord.js');
const bot = new discord.Client();
const prefix = ("/");
const help_embed = new discord.RichEmbed()
    .setColor("#00E329")
    .setDescription("Bot de Washi")
    .addField("Crée par", "@Washi#3742")
    .addField("Crée le", "25/06/2018")
    .addField("Version", "1.0.0")
    .addField("Commande du Bot !", "-   /Help : Affiche les commandes d'aide du bot !");
const info_embed = new discord.RichEmbed()
    .setColor("#DC1515")
    .setDescription("Information du discord")
    .addField("Nom du discord :", message.guild.name)
    .addField("Discord crée le :", message.guild.createdAt)
    .addField("Tu as rejoind le discord le :", message.member.joinedAt)
    .addField("Nombre de membres sur le discord :", message.guild.memberCount);

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
})

bot.on('message', message => {
    if (message.content == prefix + "info"){
        message.channel.send(info_embed)
        console.log("Commande d'info demandé");
    };
})

bot.login(process.env.TOKEN);
