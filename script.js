/* 
États de notre Tama possibles :
- 🥚 : partie non lancée
- 🐣 : naissance pendant tant qu'il n'a pas fait son 1er caca
Ensuite il devient un "grand" avec une humeur variable
- 😢 : triste 0/5
- 🙁 : pas content 1/5
- 🙂 : normal 2/5
- 😄 : content 3/5
- 🤗 : heureux 4/5
- 🥰 : très heureux 5/5
- 👻 : mort 0/5 pendant plus d'une minute 
Ses envies :
- 😋 : faim, aléatoire minimum 30 sec et max 3 minutes
- 🥱 : jouer, aléatoire minimum 30 sec et max 3 minutes
- 💩 : caca, aléatoire minimum 30 sec et max 3 minutes uniquement après avoir mangé
*/


const myTama = {
    name: "",
    alive: false,
    fed: 5,
    playfull: 5,
    cleaned: 5,
};

/* PHASE 0 :
1) CLiquez sur le bouton du milieu
2) Quand on arrive à 3 clics, on fait naitre notre tama
3) faire naitre mon tama
*/

const start = ()=>{
    // 1) CLiquez sur le bouton du milieu
const buttonCenter = document.querySelector('.js-button[data-direction="center"]');
//2) Quand on arrive à 3 clics, on fait naitre notre tama
let count = 0;
buttonCenter.addEventListener("click", ()=>{
    count ++
    console.log("click", count)
    if(count === 3){
        //3) faire naitre mon tama
        birth()
    }
})
}

/* 
PHASE 1 : la naissance de mon tama 
1) demander le nom de mon personnage
2) fait éclore mon oeuf pour passer au poussin
3) affiche mes vitals
4) affiche le nom de mon tama dans les vitals
5) mettre les scores des vitals à 5
6) afficher les actions
*/

// demander le prénom
const birth = () => {
    myTama.name = prompt("Quel nom a votre tama ?");
    // 2) fait éclore mon oeuf pour passer au poussin
    showInScreen("🐣");
    // 3) affiche mes vitals
    const vitals = document.querySelector(".js-vitals");
    vitals.classList.remove("hidden");
    // 4) affiche le nom du tama
    const nameDisplay = document.querySelector(".js-tamaName");
    nameDisplay.textContent = tamaName;
    // 5) mettre les scores des vitals à 5
    const scoresDisplay = document.querySelectorAll(".js-score");
    scoresDisplay.forEach((score)=> {
        score.textContent = 5;
    });
    //6) afficher les actions
    const actions = document.querySelector(".js-actions");
    actions.classList.remove("hidden");
    //7 appelle de la fonction pour le faire grandir
    evolve();
}

/*PHASE : 2
1)Attentre que mon tama est une première envie
2) il devient grand

*/ 
const evolve = () => {
    //1 Attentre que mon tama est une première envie
    const functionToExecute = ()=>{
    showInScreen("🥰");
    };
    wantsTo(functionToExecute);
    //2
    
}

/*LES ENVIES
FOnction pour gérer
- 😋 : faim, aléatoire minimum 30 sec et max 3 minutes
- 🥱 : jouer, aléatoire minimum 30 sec et max 3 minutes
- 💩 : caca, aléatoire minimum 30 sec et max 3 minutes uniquement après avoir mangé

1/ créer une fonction que l'on va appeler dans notre code, plus tard
2/  Stocker les envie dans une variable
3/ Avec un setTimeout choisir une envie aléatoire
4/ La durée du setTImeout est dynamique et est comprise entre une valeur max et une valeur min
5/ Afficher l'envie du tama sur mon écran
6/ l'envie de faire caca ne peut etre faite que si il a déjà mangé
*/

const wantsTo = (calback) => {
    const needs = ['😋', '🥱', '💩'];
    const minDuration = 1000;
    const maxDuration = 3000;
    const duration = getRandomInt({
        min: minDuration,
        max: maxDuration
    });
    setTimeout(() => {
        const randomIndexNeeds = getRandomInt({
            max:  needs.length,
        });
        const desire = needs[randomIndexNeeds];
        if (calback){
            calback();
        }else{
            showInScreen(desire);
        }
    },duration)
};


//fonction qui retourne un nmbre aleatoire compris entre un min et max.
const getRandomInt = (props) => {
    const max = props.max;
    // utilisation du ternaire
    const min = props.min ? props.min : 0;
    return Math.floor(Math.random()* (max - min) + min);
}

// fonction qui gére l'affichage des émoticones dans l'écran
const character = document.querySelector(".js-character");
const showInScreen = (display) =>{
    character.textContent = display;
}




//fonction de "début du Tama"
start();