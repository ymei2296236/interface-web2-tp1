import Filtre from "./Filtre.js";
import Modal from "./Modal.js";

window.addEventListener("DOMContentLoaded", function () {
	let elWrapperFiltre = document.querySelector("[data-js-control-filtres]");
	new Filtre(elWrapperFiltre);
});
