import calm from "calm-tools.js";
import skate from "skatejs";

import "els/calm-page.js";
import "els/calm-selection.js";

export default skate("calm-pages", {
	properties: {
		selected: {
			attr: true,
			set(name) {
				this._selection.selected = name;
			},
		},

		_selection: {},
	},

	template: calm.shadowDom(`
		<style>
			:host {
				display: block;
			}
		</style>

		<calm-selection id="selection">
			<content select="calm-page"></content>
		</calm-selection>
	`),

	created() {
		this._selection = this.shadowRoot.getElementById("selection");
		this._selection.addEventListener("select", (evt) => {
			calm.emit(this, "select", { detail: evt.detail });
		});
	}
});
