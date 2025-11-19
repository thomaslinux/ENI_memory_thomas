/**
 * @param {Number} MIN valeur minimum du nombre aléatoire (inclue)
 * @param {Number} MAX valeur maximum du nombre aléatoire (excluse)
 * @returns {Number} un entier aléatoire entre une valeur MIN (inclue) et une valeur MAX (exclue)
 */
function entierAleatoire(MIN,MAX) {
    return Math.floor(Math.random()*(MAX-MIN)+ MIN);
}