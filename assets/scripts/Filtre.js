import { livres } from "./livres.js";
import Livre from "./Livre.js";

export default class Filtre {
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
			new Livre(livres[i]);
		}
		this.controleFiltres();
	}

	controleFiltres() {
		for (let i = 0, l = this._elsFiltre.length; i < l; i++) {
			this._elsFiltre[i].addEventListener(
				"click",
				function () {
					this._elControlLivres.innerHTML = "";

					let nomFiltre = this._elsFiltre[i].dataset.jsFiltre,
						nomCategorie = this._elsFiltre[i].dataset.jsCategorie;

					if (nomFiltre == "tous") {
						for (let i = 0, l = livres.length; i < l; i++) {
							new Livre(livres[i]);
						}
					}

					if (nomFiltre == "nouveaute") {
						for (let i = 0, l = livres.length; i < l; i++) {
							if (livres[i][nomFiltre] == true)
								new Livre(livres[i]);
						}
					}

					if (nomFiltre == "categorie" && nomCategorie) {
						for (let i = 0, l = livres.length; i < l; i++) {
							if (livres[i].categorie == nomCategorie)
								new Livre(livres[i]);
						}
					}
				}.bind(this)
			);
		}
	}
}
