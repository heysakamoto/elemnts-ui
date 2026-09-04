import { createServerFn } from "@tanstack/react-start";
import { polar } from "@/lib/polar";

export const checkoutServerFn = createServerFn({ method: "POST" })
	.validator((data: { productId: string }) => data)
	.handler(async ({ data }) => {
		const { productId } = data;
		const checkout = await polar.checkouts.create({
			products: [productId],
		});
		return checkout;
	});
