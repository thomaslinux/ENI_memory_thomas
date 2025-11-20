let score = document.getElementById("score");

console.log("ici")
let tab = new Array(16);
tab.fill(0);
console.log(tab);
tab = tableauPaires(tab);
console.log(tab);
tab = melangeTab(tab);
console.log(tab);
const themePack = "ressources/animaux/";
const extensionPack = ".webp";
/**
 * NIVEAU 1 : Fonction d'initialisation
 */
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne toutes les images
    const images = document.querySelectorAll("img");

    // Modifie l'attribut src de chaque image
    images.forEach(function (img) {
        img.src = "ressources/question.svg";
        img.addEventListener("click", imageReplace);
    });
});

/**
 * Remplir un tableau tab par 2 fois les nombres de 1 à tab.length/2
 */
function tableauPaires(tab) {
    let longueur = tab.length;
    for (i = 0; i < longueur / 2; i++) {
        tab[i] = i + 1;
        tab[longueur - 1 - i] = i + 1;
    }
    return tab;
}

/**
 * Mélange un tableau, fonction récupérée sur Wikipedia, noms modifiés
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#JavaScript_implementation
 */
function melangeTab(tab) {
    for (let i = tab.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tab[i], tab[j]] = [tab[j], tab[i]]; // échange la case i et j
    }
    return tab;
}

let paireJouee = []; // tableau qui stocke les cartes jouées
let pairesTrouvees = 0;
let nbCoups = 0;
/**
 * 
 * @param {*} e sur l'élément clické, remplace l'image
 * @todo fait une animation au remplacement de l'image
 * @todo ne plus utiliser jQuery
 */
function imageReplace() {
    // récupère l'id du target courant
    nbCoups++;
    let currentID = this.id;
    console.log("currentID = " + currentID);
    document.getElementById(currentID).src = themePack + tab[currentID] + extensionPack;
    console.log("currentTarget : " + this.src)
    if (paireJouee[paireJouee.length - 1] == currentID) { // empeche de jouer deux fois la dernière carte
        console.log("carte déjà jouée = " + currentID)
    }
    else {
        paireJouee.push(currentID);
    }
    console.log(paireJouee);
    if (paireJouee.length==2) {
        let derniereCarte = document.getElementById(paireJouee[paireJouee.length - 1]);
        let avantDernierCarte = document.getElementById(paireJouee[paireJouee.length - 2]);
        if (derniereCarte.src == avantDernierCarte.src) { // 
            pairesTrouvees++;
            derniereCarte.removeEventListener("input",imageReplace);
            avantDernierCarte.removeEventListener("input",imageReplace);
        } else { // remet les cartes 
            // Remettre les images d'origine après un délai
                setTimeout(() => {
                    derniereCarte.src = "ressources/question.svg";
                    avantDernierCarte.src = "ressources/question.svg";
                }, 1000); // Délai de 1 seconde
        }
        paireJouee = []; // vide le tableau s'il est de taille 2
    }

score.innerText = "Score : Paires trouvées : " + pairesTrouvees + " en " + nbCoups + " clicks.";
}
// var lastTarget;
// var nbCoup = 0;
// si la valeur a l'élément cliqué est différent de l'élément précédemment cliqué,
// remplacer les images des deux éléments par le ?
// augmenter le nb de coups de 1
// sinon
// augmenter le score de 1
// augmenter le nb de coups de 1