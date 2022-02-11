<script lang="ts">
	import FontFamilySelect from '$lib/components/FontFamilySelect.svelte';
	import { store } from '$lib/store';
	import { onDestroy } from 'svelte';

	let fontfamily;
	const unsubscribe = store.subscribe((value) => {
		fontfamily = value.globalSettings.selectedFontFamily;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<section class="flex flex-col  h-screen">
	<div class="w-screen h-16 bg-black text-gray-50">top bar</div>
	<div class="flex flex-grow">
		<div class="w-64 bg-pink-400">left side</div>
		<div class="flex-grow p-5">
			<h1 style="font-family:{fontfamily}">test</h1>
		</div>
		<div class="bg-sky-400 p-5 w-64">
			<FontFamilySelect />
		</div>
	</div>
</section>
