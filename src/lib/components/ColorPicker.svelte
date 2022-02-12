<script lang="ts">
	import { onDestroy } from 'svelte';
	import { store } from '$lib/store';
	import { colorPicker } from '$lib/helpers/color-picker';
	import * as _ from 'lodash';

	let colors;

	const unsubscribe = store.subscribe((value) => {
		colors = [
			_.flatMapDeep(value.globalSettings.colorPalette.colors, (color) => {
				if (typeof color === 'string') {
					return [color];
				} else {
					return _.flatMapDeep(color, (color) => {
						return [color];
					});
				}
			})
		];
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<input type="color" name="color" id="color-id" list="colors" use:colorPicker={{}} />
<datalist id="colors">
	{#each colors as color}
		{#each color as c}
			<option value={c} />
		{/each}
	{/each}
</datalist>
