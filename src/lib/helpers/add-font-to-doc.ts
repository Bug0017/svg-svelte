export const addFontToDoc = (font: any) => {
	if (font?.family) {
		const newFont = new FontFace(font.family, `url(${font.files.regular})`);
		newFont.load().then(() => {
			(document as any).fonts.add(newFont);
		});
	}
};
