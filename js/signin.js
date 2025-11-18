const mdp = document.getElementById("password")
const login = document.getElementById("login")
const debug = document.getElementById("debug")
const faible = document.getElementById("faible")
const moyen = document.getElementById("moyen")
const fort = document.getElementById("fort")

debug.innerText = "placeholder"
mdp.addEventListener("input", verifMDP)
function verifMDP() {
    let compteurConditions = 0;
    compteurConditions += verifLongueurMDP(6);
    // mot de passe faible
    compteurConditions += verifRegex(/[a-z]+$/, "minuscule");
    // verif5Conditions += verifRegex(/[A-Z]/, "majuscule");
    compteurConditions += verifRegex(/[0-9]+$/, "chiffre");
    compteurConditions += verifRegex(/[^a-zA-Z0-9]+$/, "symbole"); // Le caractère ajouté n'est ni un chiffre ni une lettre
    compteurConditions += verifLongueurMDP(9);
    debug.innerText = mdp.value + " " + compteurConditions; // affiche le nb de conditions remplies pour le mdp
    // Faible = 1
    // dès qu'il fait 6 caractères et checkmark en bout de la ligne (score de 1)
    // Moyen = 1<score<4
    // pour un symbole ou un nombre (score de 2 à 3) 
    // Fort = 4
    //  pour 9 caractères (2 pts) + un symbole (1 pts) + un nombre (1 pts)
    // (4 pts)
}




function verifRegex(regex, elementId) {
    // console.log(regex.test(mdp.value) + " " + elementId);
    console.log(mdp.value.match(regex) + " " + elementId);
    return regex.test(mdp.value) ? 1 : 0;
}

function verifLongueurMDP(MAX) {
    return mdp.value.length >= MAX ? 1 : 0;
}
