<script lang="ts">
	import { fetchRazorPay } from '$lib/api/razorpay';
	import { useQuery } from '@sveltestack/svelte-query';
	const queryResult = useQuery('razorpay', fetchRazorPay);
	let data;
	$: {
		if ($queryResult.isSuccess) {
			data = $queryResult.data;
		}
	}

	const handleClick = () => {
		var options = {
			key: import.meta.env.VITE_RP_KEY, // Enter the Key ID generated from the Dashboard
			amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			currency: 'INR',
			name: 'Acme Corp',
			description: 'Test Transaction',
			image: 'https://example.com/your_logo',
			order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			handler: function (response) {
				alert(response.razorpay_payment_id);
				alert(response.razorpay_order_id);
				alert(response.razorpay_signature);
			},
			prefill: {
				name: 'Gaurav Kumar',
				email: 'gaurav.kumar@example.com',
				contact: '9999999999'
			},
			notes: {
				address: 'Razorpay Corporate Office'
			},
			theme: {
				color: '#3399cc'
			}
		};
		var rzp1 = new Razorpay(options);
		rzp1.on('payment.failed', function (response) {
			alert(response.error.code);
			alert(response.error.description);
			alert(response.error.source);
			alert(response.error.step);
			alert(response.error.reason);
			alert(response.error.metadata.order_id);
			alert(response.error.metadata.payment_id);
		});
		rzp1.open();
	};
</script>

{#if $queryResult.isSuccess}
	<button on:click={handleClick}>order now</button>
{/if}
