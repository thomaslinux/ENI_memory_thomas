const mdp = document.getElementById("password")
const showPasswordCheckbox = document.getElementById("show-password");
const checkboxLabel = document.getElementById("checkbox-label");

showPasswordCheckbox.addEventListener("change", afficheMDP);

function afficheMDP() {
    if (showPasswordCheckbox.checked) {
        mdp.type = "text";
        // checkboxLabel.textContent = "Masquer le mot de passe";
    } else {
        mdp.type = "password";
        // checkboxLabel.textContent = "Afficher le mot de passe";
    }
}