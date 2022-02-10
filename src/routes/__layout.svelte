<script>
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
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
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
