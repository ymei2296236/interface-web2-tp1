import Librarie from "./Librarie.js";
import Panier from "./Panier.js";

window.addEventListener("DOMContentLoaded", function () {
	let elWrapperFiltre = document.querySelector("[data-js-control-filtres]");
	new Librarie(elWrapperFiltre);

	let elWrapperLivres = document.querySelector("[data-js-control-livres]");
	new Panier(elWrapperLivres);
});
