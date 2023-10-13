import Modal from "./Modal.js";

export default class Livre {
	_el;
	_elControlLivres;

	constructor(el, indexLivre) {
		this._el = el;
		this._indexLivre = indexLivre;
		this._titre = this._el.titre;
		this._prix = this._el.prix;
		this._image = this._el.image;
		this._categorie = this._el.categorie;
		this._elControlLivres = document.querySelector(
			"[data-js-control-livres]"
		);

		this.init();
	}

	init() {
		this.creeDom();
	}

	creeDom() {
		let dom = `
                    <article class="livre" data-js-categorie="${this._categorie}|${this._indexLivre}">
                        <img src="${this._image}" alt="Image de ${this._titre}"></img>
                        <div>
                        <p>${this._titre}</p>
                        <div class="livre__flex">
                            <small class="livre__prix">${this._prix} $</small>
                            <button class="livre__button" data-js-buton>Ajouter</button>
                        </div>
                        </div>
                    </article>
        `;
		this._elControlLivres.insertAdjacentHTML("beforeend", dom);

		new Modal(this._elControlLivres.lastElementChild);
	}
}
