import { SVG } from '@svgdotjs/svg.js';
export const svgEditor = (node, params) => {
	const svg = SVG().addTo(node);
	const screen = svg.size(params.width, params.height);
	const rect = screen.rect(params.width, params.height);
	rect.fill(params.color);
	return {
		update(updatedParams) {
			rect.fill(updatedParams.color);
		},
		destroy() {
			debugger;
		}
	};
};
