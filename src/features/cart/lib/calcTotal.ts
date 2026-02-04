export default function calcTotal(subtotal: number, delivery: number, tax:number = 0, coupon: number = 0) {
	return subtotal * (1 - coupon) + delivery + tax;
}
