let avancerConteneur = document.getElementById('avancer');
let quizzConteneur = document.getElementById('quizz');
let boutonsConteneur = document.getElementById('boutons');

let questions;
let numQuestion;
let nbrQuestions;
let score;

function commencer(niveauSelection) {
    switch (niveauSelection) {
        case 'Débutant':
            questions = api.debutant;
            break;
        case 'Intermédiaire':
            questions = api.intermediaire;
            break;  
        case 'Expert':
            questions = api.expert;
            break;
    }
    console.log(questions);
    numQuestion = 1;
    nbrQuestions = questions.length;
    score = 0;
    masquerBoutons();
    afficherAvancer();
    afficherQuestion();
}

function afficherQuestion() {
    const question = questions[numQuestion - 1];
    quizzConteneur.innerHTML = `
        <span id=question>${question.question}</span>
        <div id=propositions>
            <button onclick="repondre('0')">${question.propositions[0]}</button>
            <button onclick="repondre('1')">${question.propositions[1]}</button>
            <button onclick="repondre('2')">${question.propositions[2]}</button>
            <button onclick="repondre('3')">${question.propositions[3]}</button>
        </div>
    `;
}

function masquerQuestion() {
    quizzConteneur.innerHTML = '';
}

function repondre(reponse) {
    const question = questions[numQuestion - 1];
    const bonne = question.propositions.indexOf(question.reponse).toString()
    bonne == reponse ? score ++ : undefined;
    afficherAvancer();
    afficherReponse(question);
}

function afficherReponse(question) {
    quizzConteneur.innerHTML = `
        <div id="reponse">
            <span>La bonne réponse est : ${question.reponse}</span>
            <span>${question.anecdote}</span>
            <button onclick="suivant()">Suivant</button>
        </div>
    `;
}

function suivant() {
    numQuestion += 1;
    if (numQuestion <= 10) {
        afficherQuestion();
    } else {
        masquerQuestion();
        afficherResultat();
        numQuestion = undefined;
        afficherBoutons();
    }
}

function afficherResultat() {
    avancerConteneur.innerHTML = `
        <span>Tu as eu un score de ${score}/${numQuestion}</span>
    `;
}

function afficherAvancer() {
    avancerConteneur.innerHTML = `
        <h2>Question n°${numQuestion}</h2>
        <span>Score : ${score}</span>
    `;
}

function masquerAvancer() {
    avancerConteneur.innerHTML = '';
}

function afficherBoutons() {
    boutonsConteneur.innerHTML = `
        <button onclick="commencer('Débutant')">Débutant</button>
        <button onclick="commencer('Intermédiaire')">Intermédiare</button>
        <button onclick="commencer('Confirmer')">Confirmer</button>
    `;
}

function masquerBoutons() {
    boutonsConteneur.innerHTML = '';
}

const api = {
    debutant: [
    {
      id: 1,
      question: "Combien de Pokémon un dresseur peut-il transporter ?",
      propositions: [
        "1",
        "4",
        "6",
        "10"
      ],
      reponse: "6",
      anecdote: "Un dresseur de Pokémon est une personne qui capture et entraîne des Pokémon en vue de les faire combattre."
    },
    {
      id: 2,
      question: "Sur quel animal se base la forme de Laporeille, Pokémon de la quatrième génération ?",
      propositions: [
        "L'éléphant",
        "La girafe",
        "Le lapin",
        "Le blaireau"
      ],
      reponse: "Le lapin",
      anecdote: "Sa fourrure est de couleur marron et il possède comme du coton sur ses oreilles et sur le bas de son corps beige."
    },
    {
      id: 3,
      question: "Quel est le jeu « Pokémon » le plus vendu de tous les temps sur la console Game Boy Advance ?",
      propositions: [
        "Platine",
        "Rubis",
        "Émeraude",
        "Rouge Feu"
      ],
      reponse: "Rubis",
      anecdote: "Les versions « Rubis et Saphir » mettent en scène une nouvelle région, Hoenn, avec de nouveaux Pokémon."
    },
    {
      id: 4,
      question: "Quels sont les types de Dracaufeu, que l'on retrouve sur des jaquettes des jeux « Pokémon » ?",
      propositions: [
        "Feu / Combat",
        "Feu / Dragon",
        "Feu / Vol",
        "Vol / Dragon"
      ],
      reponse: "Feu / Vol",
      anecdote: "Ses membres supérieurs se sont atrophiés et sa queue rallongée pour permettre à ce titan de garder une certaine stabilité au sol."
    },
    {
      id: 5,
      question: "Comment se prénomme le jeune garçon, héros du dessin animé « Pokémon » ?",
      propositions: [
        "Sacha",
        "Florent",
        "Jacky",
        "Pierre"
      ],
      reponse: "Sacha",
      anecdote: "Originaire du Bourg Palette, Sacha a reçu Pikachu, son Pokémon de départ, des mains du Professeur Chen."
    },
    {
      id: 6,
      question: "Comment traduire Pokémon, générateur de nombreux produits dérivés ?",
      propositions: [
        "Petit animal",
        "Chasse aux dragons",
        "Monstres de poche",
        "Mega pouvoirs"
      ],
      reponse: "Monstres de poche",
      anecdote: "De nombreux produits dérivés ont été créés, notamment des dessins animés, des cartes, des figurines et des mangas."
    },
    {
      id: 7,
      question: "Quel est l'âge du jeune Sacha Ketchum au début de la série « Pokémon » ?",
      propositions: [
        "12 ans",
        "10 ans",
        "9 ans",
        "11 ans"
      ],
      reponse: "10 ans",
      anecdote: "À 10 ans, très sûr de lui et têtu, Sacha a commencé sa quête pour devenir Maître Pokémon."
    },
    {
      id: 8,
      question: "De quelle famille de Pokémon Pikachu, Rattatac et Sabelette font-ils partie ?",
      propositions: [
        "Brebis",
        "Souris",
        "Oeufs",
        "Chiots"
      ],
      reponse: "Souris",
      anecdote: "Probablement le plus célèbre des Pokémon, Pikachu est très vite devenu la mascotte officielle de la licence."
    },
    {
      id: 9,
      question: "Dans « Pokémon », que peut-on voir sur le ventre de Ptitard et de ses évolutions ?",
      propositions: [
        "Une étoile",
        "Un cercle",
        "Un carré",
        "Une spirale"
      ],
      reponse: "Une spirale",
      anecdote: "Ce dessin est inspiré des intestins de certains têtards qui sont visibles et en forme de spirale."
    },
    {
      id: 10,
      question: "Quel nom avait été initialement choisi au moment du lancement du jeu « Pokémon » ?",
      propositions: [
        "Capsule Monsters",
        "Red Balls",
        "Mega Monsters",
        "Sacha's Quest"
      ],
      reponse: "Capsule Monsters",
      anecdote: "C'est suite à la difficulté de déposer le nom de marque que Satoshi Tajiri s'est rabattu sur le nom « Pokémon »."
    }
  ],
  intermediaire: [
    {
      id: 11,
      question: "Quelle est la couleur du Pokémon baptisé Insécateur, de double type Insecte et Vol ?",
      propositions: [
        "Bleue",
        "Rouge",
        "Jaune",
        "Verte"
      ],
      reponse: "Verte",
      anecdote: "Insécateur est inspiré de la mante religieuse verte : il possède deux paires d'ailes, et deux grandes faux en guise de bras."
    },
    {
      id: 12,
      question: "Lequel de ces Pokémon porte en guise de casque le crâne de sa mère morte ?",
      propositions: [
        "Osselait",
        "Evoli",
        "Eoko",
        "Ludicolo"
      ],
      reponse: "Osselait",
      anecdote: "Osselait est un Pokémon de départ des premiers jeux Pokémon Donjon Mystère."
    },
    {
      id: 13,
      question: "Qu'est-ce que Canarticho tient constamment dans sa main ou dans son aile ?",
      propositions: [
        "Du persil",
        "Une carotte",
        "Un artichaut",
        "Un poireau"
      ],
      reponse: "Un poireau",
      anecdote: "On peut remarquer que Canarticho possède un sourcil unique noir et des sortes de « doigts » à chaque aile."
    },
    {
      id: 14,
      question: "Qu'est-ce qui a inspiré Satoshi Tajiri pour créer les Pokémon et le concept qui va autour ?",
      propositions: [
        "Des coqs",
        "Des escargots",
        "Des criquets",
        "Des souris"
      ],
      reponse: "Des criquets",
      anecdote: "L'idée de créer ces personnages lui est venu de sa passion d'enfance, la collection des insectes."
    },
    {
      id: 15,
      question: "Dans le premier épisode de « Pokemon », combien de fois Sacha est-il électrocuté par Pikachu ?",
      propositions: [
        "Une fois",
        "Trois fois",
        "Deux fois",
        "Quatre fois"
      ],
      reponse: "Deux fois",
      anecdote: "Sacha s'appelle Ash en anglais et en français québécois, et Satoshi en japonais, en l'honneur de Satoshi Tajiri."
    },
    {
      id: 16,
      question: "Comment se prénomme le chef de la Team Rocket, organisation criminelle dans « Pokémon » ?",
      propositions: [
        "Sacha",
        "Max",
        "Giovanni",
        "Hélio"
      ],
      reponse: "Giovanni",
      anecdote: "La Team Rocket est une organisation criminelle qui s'est donnée pour but la domination du monde par tous les moyens."
    },
    {
      id: 17,
      question: "Lequel de ces Pokémon est l'un des seuls à avoir le même nom dans toutes les langues ?",
      propositions: [
        "Osselait",
        "Pikachu",
        "Canarticho",
        "Smogo"
      ],
      reponse: "Pikachu",
      anecdote: "C'est une combinaison des onomatopées japonaises « pikapika » (étincelles) et de « chuchu » (bruits émis par les souris)."
    },
    {
      id: 18,
      question: "De quel pays la géographie des lieux visités dans « Pokémon » est-elle inspirée ?",
      propositions: [
        "Du Japon",
        "De l'Inde",
        "Du Canada",
        "De la Chine"
      ],
      reponse: "Du Japon",
      anecdote: "En fait, jusqu'à la 4ème génération, toutes les cartes semblent correspondre très fortement à des parties précises du Japon."
    },
    {
      id: 19,
      question: "En dehors du Japon, par quelle couleur la cartouche Pokemon verte fut-elle remplacée ?",
      propositions: [
        "Rouge",
        "Bleue",
        "Jaune",
        "Argent"
      ],
      reponse: "Bleue",
      anecdote: "La version japonaise des premiers jeux GameBoy donnait le choix entre la version Rouge ou Verte."
    },
    {
      id: 20,
      question: "Complétez cette phrase de la Team Rocket: « Afin de préserver le monde de la...",
      propositions: [
        "Dévastation",
        "Solarisation",
        "Déforestation",
        "Désolation"
      ],
      reponse: "Dévastation",
      anecdote: "La Team Rocket, en tant qu'organisation de l'ombre, ne laisse filtrer que peu d'informations concernant son fonctionnement interne."
    }
  ],
  expert: [
    {
      id: 21,
      question: "Le spectre de quel pokémon hante le 5e étage de la Tour Pokémon, immeuble de Lavanville ?",
      propositions: [
        "Fantominus",
        "Spectrum",
        "Smogo",
        "Ossatueur"
      ],
      reponse: "Ossatueur",
      anecdote: "Cette tour sert dans le jeu à obtenir la Pokéflûte pour réveiller Ronflex en sauvant M. Fuji des griffes de la Team Rocket."
    },
    {
      id: 22,
      question: "Dans l'univers de « Pokémon », laquelle de ces baies guérit la confusion ?",
      propositions: [
        "Wiki",
        "Kika",
        "Oran",
        "Sitrus"
      ],
      reponse: "Kika",
      anecdote: "Il est possible d'obtenir une baie kika en faisant tomber les fruits d'un arbre à baies roses."
    },
    {
      id: 23,
      question: "Dans les versions américaines et japonaises de « Pokémon », à qui fait référence Hitmonlee ?",
      propositions: [
        "Bruce Lee",
        "Hong Xiguan",
        "Jackie Chan",
        "Yang Luchan"
      ],
      reponse: "Bruce Lee",
      anecdote: "Aux États-Unis, les deux Pokémon se nomment Hitmonchan et Hitmonlee, en référence à Jackie Chan et Bruce Lee."
    },
    {
      id: 24,
      question: "De quel animal Soporifik, qui peut empêcher un Pokémon de s'endormir, est-il inspiré ?",
      propositions: [
        "Le tapir",
        "Le serpent",
        "Le koala",
        "L'éléphant"
      ],
      reponse: "Le tapir",
      anecdote: "En effet, dans le folklore japonais, les tapirs sont des animaux se nourrissant des rêves et cauchemars des gens."
    },
    {
      id: 25,
      question: "Quel est le premier Pokémon à avoir été imaginé par les créateurs de la franchise ?",
      propositions: [
        "Lugia",
        "Melofée",
        "Pikachu",
        "Rhinoféros"
      ],
      reponse: "Rhinoféros",
      anecdote: "La première apparition de Rhinoférosse se fait dans l'épisode 42 où il appartient à l'arène Kas."
    },
    {
      id: 26,
      question: "Selon la légende, quel Pokémon aurait créé l'univers Pokémon avec ses mille bras ?",
      propositions: [
        "Giratina",
        "Dialga",
        "Arceus",
        "Palkia"
      ],
      reponse: "Arceus",
      anecdote: "Arceus est une créature équine, ressemblant à un centaure ou encore à un qilin, une créature de la mythologie chinoise."
    },
    {
      id: 27,
      question: "Quel Pokémon les joueurs pouvaient-ils télécharger au « Tokyo Game Show » en 1997 ?",
      propositions: [
        "Arceus",
        "Mew",
        "Ectoplasma",
        "Alakazam"
      ],
      reponse: "Mew",
      anecdote: "Lors de cet événement, la file d'attente était de quatre kilomètres, et certains campèrent devant le salon."
    },
    {
      id: 28,
      question: "Quel pokémon a été le premier enregistré dans le Pokédex National ?",
      propositions: [
        "Bulbizarre",
        "Salamèche",
        "Chenipan",
        "Carapuce"
      ],
      reponse: "Bulbizarre",
      anecdote: "Il n'y a aucune différence entre les individus mâles et femelles de cette espèce dans les jeux vidéo."
    },
    {
      id: 29,
      question: "À l'origine, quel Pokémon Sacha devait-il recevoir au moment de partir à l'aventure ?",
      propositions: [
        "Mew",
        "Bulbizarre",
        "Pikachu",
        "Melofée"
      ],
      reponse: "Melofée",
      anecdote: "Les scénaristes pensaient que Pikachu avait plus de potentiel que Melofée pour plaire à la fois aux filles et aux garçons."
    },
    {
      id: 30,
      question: "Quels sont les numéros respectifs de Pikachu et Miaouss dans le Pokédex National ?",
      propositions: [
        "47 et 74",
        "25 et 52",
        "32 et 223",
        "12 et 21"
      ],
      reponse: "25 et 52",
      anecdote: "Cela pourrait marquer l'opposition entre les personnages et symboliser le jeu du chat et de la souris qui existe entre les deux."
    }
  ]
}