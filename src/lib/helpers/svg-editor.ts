import { SVG } from '@svgdotjs/svg.js';

export const svgEditor = (node, params) => {
	const svg = SVG().addTo(node);
	const screen = svg.size(params.width, params.height);
	screen.rect(params.width, params.height).fill('green');

	return {
		update(v) {
			debugger;
		},
		destroy() {
			debugger;
		}
	};
};
