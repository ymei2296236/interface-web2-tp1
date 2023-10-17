import { livres } from "./livres.js";
import Livre from "./Livre.js";

export default class Librarie {
	constructor(el) {
		this._el = el;
		this._elsFiltre = this._el.querySelectorAll("[data-js-filtre]");
		this._elsFiltreCategorie = this._el.querySelectorAll(
			"[data-js-filtre-categorie]"
		);
		this._elControlLivres = document.querySelector(
			"[data-js-control-livres]"
		);
		this.init();
	}

	init() {
		for (let i = 0, l = 12; i < l; i++) {
			new Livre(livres[i], i);
		}
		this.controleFiltres();
	}

	controleFiltres() {
		for (let i = 0, l = this._elsFiltre.length; i < l; i++) {
			this._elsFiltre[i].addEventListener(
				"click",
				function () {
					this._elControlLivres.innerHTML = "";

					let filtreActive = document.querySelector(".liActive");

					if (filtreActive !== null) {
						filtreActive.classList.remove("liActive");
					}
					this._elsFiltre[i].classList.add("liActive");

					// if (this._elsFiltre[i].classList.contains("liActive")) {
					// 	this._elsFiltre[i].classList.remove("liActive");
					// } else this._elsFiltre[i].classList.add("liActive");

					let nomFiltre = this._elsFiltre[i].dataset.jsFiltre,
						nomCategorie = this._elsFiltre[i].dataset.jsCategorie;

					if (nomFiltre == "tous") {
						for (let i = 0, l = livres.length; i < l; i++) {
							new Livre(livres[i], i);
						}
					}

					if (nomFiltre == "nouveaute") {
						for (let i = 0, l = livres.length; i < l; i++) {
							if (livres[i][nomFiltre] == true)
								new Livre(livres[i], i);
						}
					}

					if (nomFiltre == "categorie" && nomCategorie) {
						for (let i = 0, l = livres.length; i < l; i++) {
							if (livres[i].categorie == nomCategorie)
								new Livre(livres[i], i);
						}
					}
				}.bind(this)
			);
		}
	}
}
