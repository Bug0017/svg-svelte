import { GOOGLE_FONTS_URL } from '$lib/consts';

export const fetchGoogleFonts = async () => {
	const response = await fetch(GOOGLE_FONTS_URL);
	const json = await response.json();
	return json.items;
};
