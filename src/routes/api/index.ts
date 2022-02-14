import { glob } from 'glob';
import Razorpay from 'razorpay';

export async function get(context) {
	var instance = new Razorpay({
		key_id: import.meta.env.VITE_RP_KEY,
		key_secret: import.meta.env.VITE_RP_SECRET
	});

	const order = await instance.orders.create({
		amount: 50000,
		currency: 'INR',
		receipt: 'receipt#1'
	});

	console.log(order);
	glob('src/plugins/**/', null, function (er, files) {
		if (!er) {
			console.log(files);
		}
	});

	return {
		body: order
	};
}
