import calm from "calm-tools";
import skate from "skatejs";

export default skate("calm-bar", {
	created(el) {
		calm.init(el, `
			<style>
				:host {
					display: flex;
					align-items: stretch;
					width: 100%;
					height: 56px;
					line-height: 56px;
					box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
				}

				:host(.sticky) {
					position: fixed;
					top: 0;
					left: 0;
					z-index: 97;
				}

				::content > header {
					font-size: 20px;
					margin-left: 16px;
				}
			</style>

			<content></content>
		`);
	}
});
