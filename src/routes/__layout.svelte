<script>
	import '$lib/css/index.css';
	import 'carbon-components-svelte/css/all.css';

	import {
		QueryClient,
		QueryClientProvider,
		broadcastQueryClient
	} from '@sveltestack/svelte-query';
	import { onMount } from 'svelte';
	const queryClient = new QueryClient();

	onMount(async () => {
		await broadcastQueryClient({
			queryClient,
			broadcastChannel: 'my-app'
		});
	});
</script>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>

<style>
	@font-face {
		font-family: sure-italic;
		src: url(./fonts/OperatorMonoLig-MediumItalic.otf) format('opentype');
	}

	@font-face {
		font-family: sure;
		src: url(./fonts/OperatorMonoLig-Medium.otf) format('opentype');
	}

	:global(*) {
		font-family: 'sure-italic';
	}
</style>
