const poidsInput = document.getElementById('poids');
const tailleInput = document.getElementById('taille');
const resultatIMC = document.getElementById('resultatIMC');
const resultatDiv = document.getElementById('resultat');


function CalculerIMC() {
    let poids = poidsInput.value;
    let taille = tailleInput.value; 
    let couleur;
    if (isNaN(poids) || isNaN(taille) || taille <= 0) {
        alert("Donner un poids et une taille valides.");
        return;
    }
    let imc = poids / (Math.pow(taille, 2));
    let interpretation = "Vous etes en etat";
    if (imc < 16.5) {
        interpretation += " de denutrition.";
        couleur = "#e74c3c";
    }
    else if (imc >= 16.5 && imc <= 18.5) {
        interpretation += " de maigreur.";
        couleur = "#e67e22";
    }
    else if (imc >= 18.5 && imc <= 25) {
        interpretation = "Vous avez une corpulence normale.";
        couleur = "#2ecc71";
    }
    else if (imc >= 25 && imc < 30) {
        interpretation += " de surpoids.";
        couleur = "#f39c12";
    }
    else if (imc >= 30 && imc <= 35) {
        interpretation += " d'obesite moderee.";
        couleur = "#e67e22";
    }
    else if (imc >= 35 && imc <= 40) {
        interpretation += " d'obesite severe.";
        couleur = "#e74c3c";
    }
    else {
        interpretation += " d'obesite massive ou morbide.";
        couleur = "#c0392b";
    }

    resultatIMC.textContent = `Votre IMC est de ${imc.toFixed(2)}. ${interpretation}`;
    resultatDiv.style.borderLeft = "4px solid " + couleur;
    resultatDiv.classList.remove("hidden");

}
