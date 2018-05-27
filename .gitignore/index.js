/* Bibliotheque discord.js */
const discord = require('discord.js');

/* Variables */
const bot = new discord.Client();
const PREFIX = "/";

/* Evenement / Code */
bot.on('ready', () => {
    console.log("Je suis Ready !");
    bot.channels.get("450336414891245569").send("Près a coder ");
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '/planning') {
            message.channel.send("Commande de l'utilisateur: " + message.author.username);
            bot.channels.get("450336414891245569").send(
`Comme toutes les semaines communiquer moi vos disponibilité pour la semaine qui arrive.
Pour me donner vos dispo faite comme ceci, ça me donneras une meilleur visibilité svp.
**[Jours] - [Heure a Heure] - [Jeu]**
                     
La prise de créneau a une deadline qui est fixé au Dimanche à 21h.
Un petit :white_check_mark:  seras mis sur votre message pour indiqué qu'il est bien sur le planning
`);
        }
        else if(message.content === '/test') {
            message.channel.send("Commande de l'utilisateur: " + message.author.username);
            message.author.createDM().then(channel => {
                channel.send('test')
            });
        };
    }
});

bot.login(process.env.TOKEN);
