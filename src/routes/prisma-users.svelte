<script>
	import { fetchUsers } from '$lib/api/prisma';
	import { useQuery } from '@sveltestack/svelte-query';
	const queryResult = useQuery('users', fetchUsers);
	let data;
	$: {
		if ($queryResult.isSuccess) {
			data = $queryResult.data;
		}
	}
</script>

{#if $queryResult.isSuccess}
	{#each data as user}
		<p>{user.name}</p>
		<p>{user.email}</p>
	{/each}
{/if}
