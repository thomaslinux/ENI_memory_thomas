console.log(entierAleatoire(10, 20));

/**
 * @param {Number} MIN valeur minimum du nombre aléatoire (inclue)
 * @param {Number} MAX valeur maximum du nombre aléatoire (excluse)
 * @returns {Number} un entier aléatoire entre une valeur MIN (inclue) et une valeur MAX (exclue)
 */
function entierAleatoire(MIN, MAX) {
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
}

var plateau = new Array(16);

console.log(plateau);
/**
 * NIVEAU 1 : Fonction d'initialisation
 */
$(function () {
    //initialise le tableau des cases vides
    plateau.fill(0)
    //associe un évènement à tous les td
    $('img').attr("src", "ressources/question.svg")
    $('img').click(imageReplace);
});


/**
 * 
 * @param {*} e sur l'élément clické, remplace l'image
 * @todo fait une animation au remplacement de l'image
 */
function imageReplace(e) {
    //Met la croix dans l'image dans la zone cliquée.
    $(e.target).attr("src", "ressources/animaux/1.webp");
    //Supprime l'évènement
    $(e.currentTarget).off("click");
}


/**
 * Jusqu'à ce que le tableau soit rempli, 
 * place deux nombres identiques dans deux cases différentes.
 */
function rempliPlateau(nbCartes) {

    for (i=0;i<plateau.length;) {
        const nombreAPlacer = entierAleatoire(1,nbCartes);
        let nbPlacements = 0; 
        while (nbPlacements<2) {
            let casePlateau = entierAleatoire(1,plateau.length());
            if (plateau[casePlateau]==0) { // si la case est vide
                plateau[casePlateau] = nombreAPlacer;

            }
        }
    }
}