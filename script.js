const pizzaMenu = [
    { nome: "Margherita", prezzo: 5, immagine: "img/pizza1.jpg" },
    { nome: "Capricciosa", prezzo: 8, immagine: "img/pizza2.jpg" },
    { nome: "Datterino", prezzo: 7, immagine: "img/pizza3.jpg" },
    { nome: "Pistacchio", prezzo: 12, immagine: "img/pizza4.jpg" }
];

const menuButton = document.querySelector(".menu-button");
const cardsContainer = document.querySelector(".cards");

menuButton.addEventListener("click", () => {
    if (!cardsContainer.classList.contains('show')) {
        cardsContainer.innerHTML = `
        <div class = "immagine uno">
            <img src="img/pizza1.jpg" alt="">
            <p class= "testo"> Margherita 5€</p>
        </div>
        <div class = "immagine due">
            <img src="img/pizza2.jpg" alt="">
            <p class= "testo"> Capricciosa 8€</p> 
        </div>
        <div class = "immagine tre">
            <img src="img/pizza3.jpg" alt="">
            <p class= "testo"> Datterino 7€</p>
        </div>
        <div class = "immagine quattro"> 
            <img src="img/pizza4.jpg" alt="">
            <p class= "testo"> Pistacchio 12€</p>
        </div> 
        `;
    } else {
        cardsContainer.innerHTML = '';
    }
    cardsContainer.classList.toggle("show");
    menuButton.classList.toggle("active");
});