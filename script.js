console.log("Script chargé avec succès !");
const messageBtn = document.getElementById("messageBtn");
const messagePara = document.getElementById("message");
messageBtn.addEventListener("click", function () {
    messagePara.textContent = "Vous avez cliqué sur le bouton !";
});