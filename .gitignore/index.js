/* Bibliotheque discord.js */
const discord = require('discord.js');

/* Variables */
const bot = new discord.Client();
const PREFIX = "/";

/* Evenement / Code */
bot.on('ready', () => {
    //bot.channels.get("450336414891245569").send("Prêt à tester ! Sempai ;)");
    console.log("Je suis l'early Access!");
    
    // récup le channel test-admin
    const channel = bot.channels.get("450718864666263562");
    // récup le message Yolo dans le channel
    channel.fetchMessage("453274739847200788")
    .then(message => {
        console.log(message.id)
        // écoute si les utilisateur met une réactions sur ce message
        bot.on('messageReactionAdd',(mareaction, monuser)=>{
            // mareaction.message.channel.send(`Oh ! Dommage, vous n'êtes pas administrateur ! :( 1`)
            
            // compare si l'emojie et le même 
            if(mareaction.emoji.name === "👌") {
                // vérifie si le l'id du message ou l'utilisateur à mis un réaction et le même que le message récupérer
                if(mareaction.message.id == message.id) {
                    // move le client dans le channel Acceuil.
                    channel.guild.members.get(monuser.id).setVoiceChannel("135841910395895809")
                    // mareaction.message.channel.send(`Oh ! Dommage, vous n'êtes pas administrateur ! :( 3`)
                }

            }
        });
    })
});


bot.on('message', message => {
    console.log(message)
    if(message.content[0] === PREFIX) {
        if(message.content === '/planning') {
            message.channel.send("Commande de l'utilisateur: " + message.author.username);
            bot.channels.get("450336414891245569").send(
                `<@&142615029471117312> Comme toutes les semaines communiquer moi vos disponibilité pour la semaine qui arrive.
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
        maliste = message.content.split(" -")
        if(maliste[0] === '/sondage') {
            choix1 = maliste[1]
            choix2 = maliste[2]
            choix3 = maliste[3]
            message.delete()
            if(message.member.roles.has("142615029471117312")) {
                if(message.content.split(" -").length === 4) {
                    bot.channels.get("450336414891245569").send(":notepad_spiral: ***__SONDAGE__*** :notepad_spiral:\n ----------------------- \n:arrow_forward: *__"+choix1+"__*\n ----------------------- \n:red_circle: **"+choix2+"** ou :large_blue_circle: **"+""+choix3+"**\n -----------------------")
                    .then(function (message) {
                        message.react("🔴")
                        .then(message.react("🔵"))
                        message.pin()
                    }).catch(function() {
                    //Something
                })
                }
                else {
                    message.author.createDM().then(channel => {
                        channel.send (":thinking: Veuillez vérifier que votre commande respecte le format :\n ```/sondage -Question -Choix1 -Choix2```")
                    })
                }
            }
            else {
                message.author.createDM().then(channel => {
                    channel.send ("Vous n'avez pas les droits nécessaire à la création d'un sondage. :cry:")
                })
            }
        };
        if(message.id("453240039665565697").reactions === ':ok_hand:') {
             if(message.member.roles.has("142615029471117312")) {
                 message.member.setVoiceChannel("453237572500717568")
                 channel.send("Ca a fonctionné !")
             }
            else {
                 bot.channels.get("450336414891245569").send(`Oh ! Dommage, vous n'êtes pas administrateur ! :(`)   }
        };        
    }
});


bot.login(process.env.TOKEN);
