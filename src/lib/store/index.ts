import { writable } from 'svelte/store';

const initialState = {
	globalSettings: {
		selectedFontFamily: 'sure'
	}
};

const createStore = (initialState: any) => {
	const { subscribe, set, update } = writable(initialState);
	return {
		subscribe,
		set,
		update
	};
};

export const store = createStore(initialState);
