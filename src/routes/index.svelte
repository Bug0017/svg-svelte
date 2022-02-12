<script lang="ts">
	import { store } from '$lib/store';
	import { onDestroy } from 'svelte';
	import TopbarMenu from '$lib/components/TopbarMenu.svelte';
	import { svgEditor } from '$lib/helpers/svg-editor';
	import SidebarMenu from '$lib/components/SidebarMenu.svelte';
	let fontfamily;
	let width = '100%';
	let height = '100%';

	const unsubscribe = store.subscribe((value) => {
		fontfamily = value.globalSettings.selectedFontFamily;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<section class="flex flex-col  h-screen">
	<div class="w-screen h-16 bg-black text-gray-50">
		<TopbarMenu />
	</div>
	<div class="flex flex-grow">
		<div class="w-64 bg-pink-400">left side</div>
		<div class="flex-grow p-5 bg-gray-200" use:svgEditor={{ width, height, fontfamily }} />
		<div class="bg-sky-400 p-5 w-64">
			<SidebarMenu />
		</div>
	</div>
</section>
