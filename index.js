// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const http = require('http');

// Je récupère le module exporté dans le fichier modules/hitParade.js
const moduleHitParade = require('./modules/hitParade');

// Je défini le port sur lequel mon server va écouter le requetes
const port = 3000;

// Je créé une variable qui va contenir le tableau avec toutes
// les infos du hit parade
const hitParade = moduleHitParade.data;

// initialiser un compteur
let songCount = 0;

// Votre code va ici
const server = http.createServer((request, response) => {
    console.log('Requete reçu !');

    if (request.url === '/favicon.ico') {
        response.end();
        return;
    }

    // permet de spécifier au client que notre réponse sera du texte en UTF-8
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (request.url === '/') {
        // on incrémente notre compteur
        songCount++;

        // la fonction .end() permet de mettre fin à la réponse HTTP et permet
        // de définir le contenu de celle-ci.
        const song = moduleHitParade.getIntroSong();
        response.end(song);
    }
    else if (request.url === '/classement') {

        const reponseHtml = moduleHitParade.getChartsAsHtml();

        response.end(reponseHtml);
        
        // alternative
        // On parcourt l'intégralité de notre tableau qui contient notre classement
        // for (const songInfo of hitParade) {
        //     const entreeClassement = `${songInfo.position} - titre : ${songInfo.title} de l'artiste : ${songInfo.artist} \n`;
        //     response.write(entreeClassement);
        // }
        // response.end();

        // alternative foreach
        // let classement = ``;

        // hitParade.forEach((songInfo) => {
        //     classement = classement + `${songInfo.position} - ${songInfo.artist} - ${songInfo.title} \n`
        // });

        // response.end(classement);
    
    }
    else if (request.url === '/stats') {
        response.end(`La chanson a été vue ${songCount} fois`);
    }
    else {
        response.end(`404, page non trouvée`);
    }

});

// On demande au serveur d'écouter sur le port 3000
// il faudra faire des requete à l'adresse localhost:3000
server.listen(port, () => {
    console.log(`Serveur pret à écouter, envoie tes requetes sur http://locahost:${port} `)
});