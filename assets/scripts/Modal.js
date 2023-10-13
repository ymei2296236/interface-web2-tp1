import { livres } from "./livres.js";

export default class Modal {
	constructor(el) {
		this._el = el;
		this._btnAjouter = this._el.querySelector("button");
		this._indexLivre = this._el.dataset.jsCategorie.slice(
			this._el.dataset.jsCategorie.indexOf("|") + 1
		);
		this._image = livres[this._indexLivre].image;
		this._titre = livres[this._indexLivre].titre;
		this._auteur = livres[this._indexLivre].auteur;
		this._editeur = livres[this._indexLivre].editeur;
		this._pages = livres[this._indexLivre].pages;
		this._prix = livres[this._indexLivre].prix;
		this._description = livres[this._indexLivre].description;

		this._elDivModal = document.querySelector("[data-js-modal]");
		this._elContenuModal = document.querySelector(
			"[data-js-modal-contenu]"
		);
		this._elHTML = document.documentElement;
		this._elBody = document.body;
		this._fermeModal = this.fermeModal.bind(this);
		this.init();
	}

	init() {
		this._el.addEventListener(
			"click",
			function (e) {
				let elTarget = e.target;

				if (!elTarget.hasAttribute("data-js-buton")) {
					this.afficheModal();
				}
			}.bind(this)
		);
	}

	afficheModal() {
		// console.log(this._indexLivre);
		this._elHTML.classList.add("overflow-y-hidden");
		this._elBody.classList.add("overflow-y-hidden");

		if (this._elDivModal.classList.contains("modal--ferme")) {
			this._elDivModal.classList.replace("modal--ferme", "modal--ouvert");
		}
		this.injecteDom();

		this._elDivModal.addEventListener("click", this._fermeModal);
	}

	injecteDom() {
		let dom = `
                        <div class="modal__img">
							<img src="${this._image}" alt="Image de ${this._titre}"></img>
						</div>
                        <div class="modal__texte">
							<p><small>Titre : </small>${this._titre}</p>
							<p><small>Auteur : </small>${this._auteur}</p>
							<p><small>Éditeur : </small>${this._editeur}</p>
							<p><small>Pages : </small>${this._pages}</p>
							<p>${this._description}</p>
                        </div>
        `;
		this._elContenuModal.innerHTML = dom;
	}

	fermeModal() {
		if (this._elDivModal.classList.contains("modal--ouvert")) {
			this._elDivModal.classList.replace("modal--ouvert", "modal--ferme");
			this._elHTML.classList.remove("overflow-y-hidden");
			this._elBody.classList.remove("overflow-y-hidden");
		}
	}
}
