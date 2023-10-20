import { livres } from "./livres.js";
import Livre from "./Livre.js";

export default class Librarie {
	#_el;
	#_elsFiltre;
	#_elsFiltreCategorie;
	#_elControlLivres;

	constructor(el) {
		this.#_el = el;
		this.#_elsFiltre = this.#_el.querySelectorAll("[data-js-filtre]");
		this.#_elsFiltreCategorie = this.#_el.querySelectorAll("[data-js-filtre-categorie]");
		this.#_elControlLivres = document.querySelector("[data-js-control-livres]");

		this.#init();
	}

	/**
	 * Section privée
	 */
	#init() {
		// Injecte les 12 premiers livres au chargement de la page
		for (let i = 0, l = 12; i < l; i++) {
			new Livre(livres[i], i);
		}
		this.#afficheLibarieParFiltre();
	}

	/**
	 * Section privée
	 * Affiche les livres correspondants au flitre cliqué
	 */
	#afficheLibarieParFiltre() {

		for (let i = 0, l = this.#_elsFiltre.length; i < l; i++) {
			// Ajoute un gestionnaire d'événement au chaque filtre
			this.#_elsFiltre[i].addEventListener("click",function () {
				
				// Gére le style de filtre 
				let filtreActive = document.querySelector(".filtreActive");
				
				if (filtreActive !== null) {
					filtreActive.classList.remove("filtreActive");
				}
				this.#_elsFiltre[i].classList.add("filtreActive");
				// Réinitialise la zone d'affichage de livres
				this.#_elControlLivres.innerHTML = "";
				
				/**
				 * Effectue le filtrage en fonction de filtre
				 */
				let nomFiltre = this.#_elsFiltre[i].dataset.jsFiltre,
					nomCategorie = this.#_elsFiltre[i].dataset.jsCategorie;

				if (nomFiltre == "tous") {
					for (let i = 0, l = livres.length; i < l; i++) {
						new Livre(livres[i], i);
					}
				}

				if (nomFiltre == "nouveaute") {
					for (let i = 0, l = livres.length; i < l; i++) {
						if (livres[i][nomFiltre] === true)
							new Livre(livres[i], i);
					}
				}

				if (nomFiltre == "categorie" && nomCategorie) {
					for (let i = 0, l = livres.length; i < l; i++) {
						if (livres[i].categorie == nomCategorie)
							new Livre(livres[i], i);
					}
				}
			}.bind(this));
		}
	}
}
