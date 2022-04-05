// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const http = require('http');

// Je défini le port sur lequel mon server va écouter le requetes
const port = 3000;


// Hit parade, classé du premier au dernier.
const hitParade = [
    {
        position: 1,
        artist: `Jain`,
        title: `Come`
    },
    {
        position: 2,
        artist: `Matt Simons`,
        title: `Catch & Realease`
    },
    {
        position: 3,
        artist: `Twety One Pilots`,
        title: `Stressed Out`,
    },
    {
        position: 4,
        artist: `Justin Bieber`,
        title: `Love Yourself`,
    },
    {
        position: 5,
        artist: `Kids United`,
        title: `On écrit sur les murs`,
    },
    {
        position: 6,
        artist: `Rihanna`,
        title: `Work`,
    },
    {
        position: 7,
        artist: `Julian Perretta`,
        title: `Miracle`,
    },
    {
        position: 8,
        artist: `Yall`,
        title: `Hundred Miles`,
    },
    {
        position: 9,
        artist: `Kendji Girac`,
        title: `No Me Mirès Màs`,
    },
];

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
        response.end(`Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock.`);
    }
    else if (request.url === '/classement') {

        response.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Hit MO'chine</title>
            </head>
            <body>
                <ul>`
        );

        for (let songInfo of hitParade) {
            const texte = `${songInfo.position} ${songInfo.artist} ${songInfo.title}`;
            response.write(`<li>${texte}</li>`);
        };

        response.write(`</ul></body></html>`);

        response.end();
        
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