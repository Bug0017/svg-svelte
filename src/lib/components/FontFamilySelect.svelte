<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';
	import { Select, SelectItem } from 'carbon-components-svelte';
	import { fetchGoogleFonts } from '$lib/api/google-fonts';
	import { addFontToDoc } from '$lib/helpers/add-font-to-doc';
	import { store } from '$lib/store';
	const queryResult = useQuery('google-fonts', fetchGoogleFonts);

	let selected;

	$: {
		if ($queryResult.isSuccess) {
			selected = $queryResult.data[0].family;
			store.update((state) => {
				return {
					...state,
					globalSettings: {
						...state.globalSettings,
						selectedFontFamily: selected
					}
				};
			});
		}
	}

	const handleChange = (e: any) => {
		const font = $queryResult.data.filter((item: any) => item.family === e.detail)[0];
		if (font) {
			addFontToDoc(font);
		}
		store.update((state) => {
			return {
				...state,
				globalSettings: {
					...state.globalSettings,
					selectedFontFamily: e.detail
				}
			};
		});
	};
</script>

{#if $queryResult.isSuccess}
	{#await $queryResult}
		<p>loading..</p>
	{:then data}
		<Select labelText="Font Family" size="sm" {selected} on:change={handleChange}>
			{#each data.data as item}
				<SelectItem value={item.family} text={item.family} />
			{/each}
			<SelectItem value="sure" text="sure" />
			<SelectItem value="sure-italic" text="sure italic" />
		</Select>
	{:catch error}
		<p>{error}</p>
	{/await}
{/if}
