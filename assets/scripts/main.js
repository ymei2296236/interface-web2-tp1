import Filtre from "./Filtre.js";

window.addEventListener("DOMContentLoaded", function () {
	let elWrapperFiltre = document.querySelector("[data-js-control-filtres]");

	new Filtre(elWrapperFiltre);
});
