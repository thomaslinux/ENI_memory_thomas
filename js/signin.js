const mdp = document.getElementById("password")
const login = document.getElementById("login")
const force = document.getElementById("force")
const faible = document.getElementById("faible")
const moyen = document.getElementById("moyen")
const fort = document.getElementById("fort")

force.innerText = ""
mdp.addEventListener("input", verifMDP)
// mdp.addEventListener("input", verifMDP) // ne pas modifier

/**
 * @void calcule la complexité du mot de passe
 */
function verifMDP() {
    let compteurConditions = 0;
    compteurConditions += verifLongueurMDP(6);
    // mot de passe faible
    compteurConditions += verifRegex(/[a-z]/, "minuscule");
    // verif5Conditions += verifRegex(/[A-Z]/, "majuscule");
    compteurConditions += verifRegex(/[0-9]/, "chiffre");
    compteurConditions += verifRegex(/[^a-zA-Z0-9]/, "symbole"); // Le caractère ajouté n'est ni un chiffre ni une lettre
    compteurConditions += verifLongueurMDP(9);
    barDeForce(compteurConditions)

    // debug.innerText = mdp.value + " " + compteurConditions; // affiche le nb de conditions remplies pour le mdp
    // Faible = 1
    // dès qu'il fait 6 caractères et checkmark en bout de la ligne (score de 1)
    // Moyen = 1<score<4
    // pour un symbole ou un nombre (score de 2 à 3) 
    // Fort = 4
    //  pour 9 caractères (2 pts) + un symbole (1 pts) + un nombre (1 pts)
    // (4 pts)
}

/**
 * 
 * @param {Number} compteurConditions le score de complexité du mot de passe calculé dans la fonction verifMDP
 * @void modifie la couleur de la progressBar du mot de passe
 */
function barDeForce(compteurConditions) {
    const progressBar = document.getElementById("progressBar")
    percent = compteurConditions * 1.5 + "%"
    progressBar.style.width = percent
    if (compteurConditions > 30) {
        progressBar.style.backgroundColor = "red";
        force.innerText = percent + " (fort)"
    }
    else if (compteurConditions > 20) {
        progressBar.style.backgroundColor = "darkorange";
        force.innerText = percent + " (moyen)"
    }
    else {
        progressBar.style.backgroundColor = "hsla(56, 100%, 44%, 1.00)";
        force.innerText = percent + " (faible)"
    }
}


/**
 * 
 * @param {regex} regex une expression regex testée sur la value de mdp
 * @param {*} elementId le nom du test pour la console
 * @param {*} mdp l'élément html dans la value est testée
 * @returns 
 */
function verifRegex(regex, elementId) {
    // let score = mdp.value.match(regex) + ""
    // let verif = score.length>0;
    let verif = regex.test(mdp.value);
    // console.log(regex.test(mdp.value) + " " + elementId);
    // console.log(score + " " + elementId + verif);
    return verif ? 10 : 0;
}

/**
 * 
 * @param {Number} MAX la longueur a dépasser pour valider la condition
 * @returns 
 */
function verifLongueurMDP(MAX) {
    let score = mdp.value.length;
    return score >= MAX ? 10 : 0;
}
