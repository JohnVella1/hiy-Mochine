const monModule = {
    // tableau contenant les données
    data: [
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
    ],
    // une fonction permettant de récupérer le classement
    // sous la forme d'une chaine de caractère, formatée en HTML
    getChartsAsHtml: function() {
        let classement = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hit MO'chine</title>
        </head>
        <body>
            <ul>`;

        for (let songInfo of monModule.data) {
            const texte = `${songInfo.position} ${songInfo.artist} ${songInfo.title}`;

            classement = classement + `<li>${texte}</li>`
        };

        classement = classement + `</ul></body></html>`;

        return classement;
    },

    // fonction permettant de récupérer la chainson d'intro
    getIntroSong: function() {
        return `Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock.`;
    }
};

module.exports = monModule;