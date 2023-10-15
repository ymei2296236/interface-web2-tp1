import { livres } from "./livres.js";

export default class Panier {
	constructor(el) {
		this._el = el;
		this._btnPanier = this._el.querySelector("[data-js-panier-bouton]");
		this._elPanierDetail = this._el.querySelector("[data-js-detail]");
		this._elBody = this._el.closest("body");
		this.init();
	}

	init() {
		this._btnPanier.addEventListener(
			"click",
			function () {
				this.afficheModal();
			}.bind(this)
		);
	}

	afficheModal() {
		if (this._elPanierDetail.classList.contains("panier__detail--ferme")) {
			this._elPanierDetail.classList.replace(
				"panier__detail--ferme",
				"panier__detail--ouvert"
			);
			this.injecteDom();
		} else if (
			this._elPanierDetail.classList.contains("panier__detail--ouvert")
		) {
			this._elPanierDetail.classList.replace(
				"panier__detail--ouvert",
				"panier__detail--ferme"
			);
			this._elPanierDetail.innerHTML = "";
		}
	}

	injecteDom() {
		let somme = 0;
		if (!localStorage.panier) {
			this._elPanierDetail.innerHTML = `
				<p>Il n'y a aucun livre dans votre panier.</p>
				`;
		} else {
			this._aPanier = JSON.parse(localStorage.panier);
			this._elPanierDetail.innerHTML = `
											<table>
												<thead>
													<tr>
													<th>Livre</th>
													<th>Prix</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
											`;
			this._tbody = this._elPanierDetail.querySelector("tbody");

			for (const key in this._aPanier) {
				this._tbody.insertAdjacentHTML(
					"beforeend",
					`<td>${key}</td><td>${this._aPanier[key]} $</td>`
				);

				somme += parseInt(this._aPanier[key]);
			}
			this._tbody.insertAdjacentHTML(
				"beforeend",
				`<td>Total</td><td class="panier__somme">${somme} $</td>`
			);
		}
	}
}
