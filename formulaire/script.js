// === Gestion du volume ===
const volumeSlider = document.getElementById("volume");
const volumeValue = document.getElementById("volume-value");

function updateSlider() {
  const value = volumeSlider.value;
  volumeValue.textContent = value;
  const percent = (value / volumeSlider.max) * 100;
  volumeSlider.style.setProperty("--value", percent + "%");
}

if (volumeSlider) {
  updateSlider();
  volumeSlider.addEventListener("input", updateSlider);
}

// === Modif Wikipedia ===
const wikipediaLink = document.querySelector('a[href*="wikipedia.org"]');
if (wikipediaLink) {
  wikipediaLink.href = "https://fr.wikipedia.org/";
}

// === Vérif Oui/Non ===
const verifyButton = document.getElementById("bouton-ok");
const textInput = document.getElementById("barre1");

if (verifyButton && textInput) {
  verifyButton.addEventListener("click", function () {
    const inputValue = textInput.value.trim().toLowerCase();
    if (inputValue === "oui" || inputValue === "non") {
      console.log("ok");
    } else {
      textInput.value = "Il faut mettre Oui ou Non";
    }
  });
}

// === Radios ===
const choix1 = document.getElementById("choix1");
if (choix1) {
  const label1 = choix1.nextSibling;
  if (label1) label1.textContent = "HP";
}

const choix2 = document.getElementById("choix2");
if (choix2) {
  const label2 = choix2.nextSibling;
  if (label2) label2.textContent = "Casque";
}

const choix3 = document.getElementById("choix3");
if (choix3) {
  const label3 = choix3.nextSibling;
  if (label3) label3.textContent = "Bluetooth";
}

const radioButtons = document.querySelectorAll('input[name="choix"]');
const volumeLabel = document.querySelector('label[for="volume"] b');

radioButtons.forEach(radio => {
    radio.addEventListener('click', () => {
        const label = radio.nextSibling.textContent;
        volumeLabel.textContent = "Volume " + label;
    });
});

if (volumeSlider) {
  volumeSlider.max = 100;
  console.log("Valeur max du volume :", volumeSlider.max);

  volumeSlider.addEventListener("input", function() {
    const valueDisplay = document.getElementById("volume-value");
    valueDisplay.textContent = this.value;
  });
}

// === Checkbox mute ===
const caseLabel = document.querySelector("label[for='case']");
if (caseLabel) {
  caseLabel.textContent = "Mute";
}

const muteCheckbox = document.getElementById("case");
if (muteCheckbox) {
  muteCheckbox.addEventListener("change", function () {
    if (this.checked) {
      volumeSlider.value = 0;
      volumeSlider.disabled = true;
      updateSlider();
    } else {
      volumeSlider.disabled = false;
    }
  });
}

// === Ajout image dans Lien et images ===
const googleLogo = document.querySelector('img[alt="Logo de Google"]');
if (googleLogo) {
  const newImage = document.createElement("img");
  newImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
  newImage.alt = "Logo UPHF";
  newImage.width = 200;
  googleLogo.after(newImage);
}

// === Démarrage : cacher tout sauf le menu + décocher cases ===
document.addEventListener("DOMContentLoaded", function () {
  const parties = document.querySelectorAll("#partie1, #partie2, #partie3");
  const checkboxes = document.querySelectorAll("#menu input[type='checkbox']");

  // Cache toutes les parties
  for (let i = 0; i < parties.length; i++) {
    parties[i].style.display = "none";
  }

  // Décoche toutes les cases
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }

  // Ajout des événements
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function () {
      const partie = document.getElementById(this.value);
      if (this.checked) {
        partie.style.display = "block";
      } else {
        partie.style.display = "none";
      }
    });
  }
});

// === Récupérer l’année du champ date ===
const dateInput = document.getElementById("date");
if (dateInput) {
  dateInput.addEventListener("change", function () {
    const year = new Date(this.value).getFullYear();
    console.log("Année choisie :", year);
  });
}

// === Progression automatique des barres ===
const progressBar = document.getElementById("progress-bar");
const stockageBar = document.getElementById("stockage-bar");

if (progressBar && stockageBar) {
  progressBar.value = 0;
  stockageBar.value = 0;

  setInterval(function () {
    if (progressBar.value < 100) progressBar.value += 5;
    if (stockageBar.value < 100) stockageBar.value += 5;
  }, 1000);
}
