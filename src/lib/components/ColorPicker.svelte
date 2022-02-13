<script lang="ts">
	import { onDestroy } from 'svelte';
	import { store } from '$lib/store';
	import { colorPicker } from '$lib/helpers/color-picker';
	import * as _ from 'lodash';

	let colors;
	let selectedColor;

	const unsubscribe = store.subscribe((state) => {
		colors = [
			_.flatMapDeep(state.globalSettings.colorPalette.colors, (color) => {
				if (typeof color === 'string') {
					return [color];
				} else {
					return _.flatMapDeep(color, (color) => {
						return [color];
					});
				}
			})
		];

		selectedColor = state.globalSettings.selectedColor;
	});

	function updateSelectedColor(e) {
		store.update((state) => {
			return {
				...state,
				globalSettings: {
					...state.globalSettings,
					selectedColor: e.target.value
				}
			};
		});
	}

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="flex flex-col">
	<label for="color-id">Background</label>
	{@debug colors}
	<input
		type="color"
		name="color"
		id="color-id"
		list="colors"
		use:colorPicker={{ selectedColor }}
		on:change={updateSelectedColor}
	/>
	<datalist id="colors">
		<option value="#ffffff" />
		{#each colors as color}
			{#each color as c}
				<option value={c} />
			{/each}
		{/each}
	</datalist>
</div>
