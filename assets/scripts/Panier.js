import { livres } from "./livres.js";

export default class Panier {
	constructor(el) {
		this._el = el;
		this.init();
	}
	init() {
		this._el.addEventListener(
			"click",
			function (e) {
				let elTarget = e.target;
				console.log(e.target);
				// e.stopPropagation();
				if (elTarget.hasAttribute("data-js-buton")) {
					this._elInfoLivre =
						elTarget.closest("article").dataset.jsCategorie;

					console.log(this._elInfoLivre);

					this._indexLivre = this._elInfoLivre.slice(
						this._elInfoLivre.indexOf("|") + 1
					);
					this._titre = livres[this._indexLivre].titre;
					this._prix = livres[this._indexLivre].prix;

					this.ajouteAuPanier();
				}
			}.bind(this)
		);
	}
	ajouteAuPanier() {
		if (!localStorage.panier) {
			this._aPanier = {};
		} else {
			this._aPanier = JSON.parse(localStorage.panier);
		}
		this._aPanier[this._titre] = `${this._prix} $`;
		console.log(this._aPanier);

		localStorage.setItem("panier", JSON.stringify(this._aPanier));
	}
}
