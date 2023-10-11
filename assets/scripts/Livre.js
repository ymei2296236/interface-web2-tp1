export default class Livre {
	_el;
	_elWrapper;

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
		this._elwrapper = document.querySelector("[data-js-livres]");
		this._elImg = document.createElement("div");

		this.init();
	}

	init() {
		this.creeDom();
	}

	creeDom() {
		let dom = `
                    <article class="livre" data-js-index>
                        <img src="${this._image}" alt="Image de ${this._titre}"></img>
                        <div>
                        <p>${this._titre}</p>
                        <div>
                            <small>${this._prix}</small>
                            <button>Ajouter</button>
                        </div>
                        </div>
                    </article>
        `;
		this._elwrapper.insertAdjacentHTML("beforeend", dom);
	}
}
