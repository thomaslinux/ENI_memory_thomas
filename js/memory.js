/**
 * @param {Number} MIN valeur minimum du nombre aléatoire (inclue)
 * @param {Number} MAX valeur maximum du nombre aléatoire (excluse)
 * @returns {Number} un entier aléatoire entre une valeur MIN (inclue) et une valeur MAX (exclue)
 */
function entierAleatoire(MIN, MAX) {
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
}

/**
 * NIVEAU 1 : Fonction d'initialisation
 */
$(function () {
    //initialise le tableau des cases vides
    //associe un évènement à tous les td
    $('img').attr("src", "ressources/question.svg")
    $('img').click(imageReplace);
});
console.log("ici")
let tab = new Array(16);
tab.fill(0);
console.log(tab);
tab = tableauPaires(tab);
console.log(tab);
tab = melangeTab(tab);
console.log(tab);

/**
 * Rempli un tableau de 0 à sa taille par 2 fois les nombres.
 */
function tableauPaires(tab) {
    let longueur = tab.length;
    for (i=0;i<longueur;i++) {
        tab[i]=i;
        tab[longueur-1-i]=i;
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
    //Met la croix dans l'image dans la zone cliquée.
    $(e.target).attr("src", "ressources/animaux/" + tab[$(e.target).attr("id")] + ".webp");
    console.log($(e.target).attr("id")+1);
    // $(e.target).attr("src", "ressources/animaux/1.webp");
    //Supprime l'évènement
    $(e.currentTarget).off("click");
}
