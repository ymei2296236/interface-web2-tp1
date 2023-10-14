import { livres } from "./livres.js";

export default class Panier {
	constructor(el) {
		this._el = el;
		this.init();
	}

	init() {
		this._el.addEventListener("click", function () {}.bind(this));
	}
}
