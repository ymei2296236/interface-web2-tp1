import { livres } from "./livres.js";

export default class Livre {
	_el;
	_elControlLivres;

	constructor(el, indexLivre) {
		this._el = el;
		this._indexLivre = indexLivre;
		this._titre = this._el.titre;
		this._prix = this._el.prix;
		this._image = this._el.image;
		this._auteur = this._el.auteur;
		this._editeur = this._el.editeur;
		this._pages = this._el.pages;
		this._description = this._el.description;
		this._categorie = this._el.categorie;
		this._elControlLivres = document.querySelector(
			"[data-js-control-livres]"
		);
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
		this.creeDomLivre();
	}

	creeDomLivre() {
		let dom = `
                    <article class="livre" data-js-categorie="${this._categorie}|${this._indexLivre}">
                        <img src="${this._image}" alt="Image de ${this._titre}"></img>
                        <div>
                        <p>${this._titre}</p>
                        <div class="livre__flex">
                            <small class="livre__prix">${this._prix} $</small>
                            <button class="livre__button" data-js-bouton>Ajouter</button>
                        </div>
                        </div>
                    </article>
        `;
		this._elControlLivres.insertAdjacentHTML("beforeend", dom);

		this._elTuile = this._elControlLivres.lastElementChild;

		this._elTuile.addEventListener("click", this.gereLivre.bind(this));
	}

	gereLivre(e) {
		let elTarget = e.target;
		if (elTarget.hasAttribute("data-js-bouton")) {
			this._elLivreDataset =
				elTarget.closest("article").dataset.jsCategorie;
			this._indexLivre = this._elLivreDataset.slice(
				this._elLivreDataset.indexOf("|") + 1
			);
			this._titre = livres[this._indexLivre].titre;
			this._prix = livres[this._indexLivre].prix;

			this.ajouteAuPanier();
		} else {
			this.afficheModal();
		}
	}

	afficheModal() {
		// console.log(this._indexLivre);
		this._elHTML.classList.add("overflow-y-hidden");
		this._elBody.classList.add("overflow-y-hidden");

		if (this._elDivModal.classList.contains("modal--ferme")) {
			this._elDivModal.classList.replace("modal--ferme", "modal--ouvert");
		}
		this.injecteDomModal();

		this._elDivModal.addEventListener("click", this._fermeModal);
	}

	injecteDomModal() {
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

	ajouteAuPanier() {
		if (!localStorage.panier) {
			this._aPanier = {};
		} else {
			this._aPanier = JSON.parse(localStorage.panier);
		}
		this._aPanier[this._titre] = `${this._prix}`;

		localStorage.setItem("panier", JSON.stringify(this._aPanier));
	}
}
