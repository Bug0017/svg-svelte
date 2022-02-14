export const fetchRazorPay = async () => {
	const response = await fetch('http://localhost:3000/api');
	const json = await response.json();
	return json;
};
