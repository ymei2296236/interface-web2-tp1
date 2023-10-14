import Librarie from "./Librarie.js";
import Panier from "./Panier.js";

window.addEventListener("DOMContentLoaded", function () {
	let elWrapperFiltre = document.querySelector("[data-js-control-filtres]");
	new Librarie(elWrapperFiltre);

	let elPanier = document.querySelector("[data-js-panier]");
	new Panier(elPanier);
});
