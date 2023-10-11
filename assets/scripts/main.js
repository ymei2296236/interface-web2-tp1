import { livres } from "./livres.js";
import Livre from "./Livre.js";

window.addEventListener("DOMContentLoaded", function () {
	for (let i = 0, l = livres.length; i < l; i++) {
		new Livre(livres[i]);
	}
});
