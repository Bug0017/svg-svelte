export const fetchUsers = async () => {
	const response = await fetch('http://localhost:3000/api/prisma');
	const json = await response.json();
	return json;
};
