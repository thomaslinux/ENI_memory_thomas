const form = document.querySelector("form");

document.getElementById("inscriptionForm")?.addEventListener('submit',async function(e) {
    e.preventDefault(); // remplacer le comportement par défaut du submit
    let email = document.getElementById('email').value;
    let nom = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let users = JSON.parse(localStorage.getItem('users')) || {};
    console.log("users="+users);
    if (users[email]) {
        alert("Un utilisateur avec cet email existe déjà.");
        return;
    }

    // Hache le mot de passe
    // const hashedPassword = await hashPassword(password);

    // stocke le mot de passe haché
    users[email] = {
        nom: nom,
        // password: hashedPassword,
        password: password,
        scores: [],
        preferences: {}
    };

    localStorage.setItem('users',JSON.stringify(users));
    alert("Inscription réussie !"); // Indication de succès
    console.log(JSON.parse(localStorage.getItem('users')))
});
