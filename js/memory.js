/**
 * @param {Number} MIN valeur minimum du nombre aléatoire (inclue)
 * @param {Number} MAX valeur maximum du nombre aléatoire (excluse)
 * @returns {Number} un entier aléatoire entre une valeur MIN (inclue) et une valeur MAX (exclue)
 */
function entierAleatoire(MIN, MAX) {
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
}

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
$(function () {
    //initialise le tableau des cases vides
    //associe un évènement à tous les td
    $('img').attr("src", "ressources/question.svg")
    $('img').click(imageReplace);
});

/**
 * Remplir un tableau tab par 2 fois les nombres de 1 à tab.length/2
 */
function tableauPaires(tab) {
    let longueur = tab.length;
    for (i=0;i<longueur/2;i++) {
        tab[i]=i+1;
        tab[longueur-1-i]=i+1;
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

/**
 * 
 * @param {*} e sur l'élément clické, remplace l'image
 * @todo fait une animation au remplacement de l'image
 */
function imageReplace(e) {
    // console.log("src", themePack + tab[$(e.target).attr("id")] + extensionPack);
    if ($(e.target).attr("src")=="ressources/question.svg") {
        $(e.target).attr("src", themePack + tab[$(e.target).attr("id")] + extensionPack);
    } else {

        $(e.target).attr("src", "ressources/question.svg");
    };
}
let lastTarget;
// si la valeur a l'élément cliqué est différent de l'élément précédemment cliqué,
// remplacer les images des deux éléments par le ?
// augmenter le nb de coups de 1
// sinon
// augmenter le score de 1
// augmenter le nb de coups de 1