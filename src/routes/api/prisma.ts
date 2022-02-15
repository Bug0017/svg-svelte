import { getAllUsers } from '$lib/db';

export async function get(context) {
	const users = await getAllUsers();
	return {
		body: users
	};
}
