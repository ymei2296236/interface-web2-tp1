export default class Livre {
	_el;
	_elControlLivres;

	constructor(el) {
		this._el = el;
		this._titre = this._el.titre;
		// this._auteur = this._el.auteur;
		// this._description = this._el.description;
		this._prix = this._el.prix;
		// this._editeur = this._el.editeur;
		// this._pages = this._el.pages;
		this._image = this._el.image;
		this._nouveaute = this._el.nouveaute;
		this._categorie = this._el.categorie;
		this._elControlLivres = document.querySelector(
			"[data-js-control-livres]"
		);
		this._elImg = document.createElement("div");

		this.init();
	}

	init() {
		this.creeDom();
	}

	creeDom() {
		let dom = `
                    <article class="livre" data-js-categorie="${this._categorie}">
                        <img src="${this._image}" alt="Image de ${this._titre}"></img>
                        <div>
                        <p>${this._titre}</p>
                        <div class="livre__flex">
                            <small class="livre__prix">${this._prix} $</small>
                            <button class="livre__button">Ajouter</button>
                        </div>
                        </div>
                    </article>
        `;
		this._elControlLivres.insertAdjacentHTML("beforeend", dom);
	}
}
