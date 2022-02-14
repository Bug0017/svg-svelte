<script lang="ts">
	import { onDestroy } from 'svelte';
	import { gql, operationStore, query } from '@urql/svelte';
	import { store } from '$lib/store';
	import TopbarMenu from '$lib/components/TopbarMenu.svelte';
	import { svgEditor } from '$lib/helpers/svg-editor';
	import SidebarMenu from '$lib/components/SidebarMenu.svelte';
	let fontfamily;
	let width;
	let height;
	let color;
	const unsubscribe = store.subscribe((value) => {
		fontfamily = value.globalSettings.selectedFontFamily;
		color = value.globalSettings.selectedColor;
		width = value.globalSettings.width;
		height = value.globalSettings.height;
	});

	onDestroy(() => {
		unsubscribe();
	});
	const userRepoQuery = gql`
		query {
			ping
		}
	`;

	const userRepos = operationStore(userRepoQuery);

	query(userRepos);
</script>

<section class="flex flex-col  h-screen flex-none">
	<div class="w-screen h-16 bg-black text-gray-50">
		<TopbarMenu />
	</div>
	<div class="flex flex-grow">
		<div class="w-64 bg-pink-400">left side</div>
		<div
			class="flex-grow p-5 bg-gray-200 overflow-scroll"
			use:svgEditor={{ width, height, fontfamily, color }}
		/>
		<div class="bg-sky-400 p-5 w-64 flex-none">
			<SidebarMenu />
		</div>
	</div>
</section>
