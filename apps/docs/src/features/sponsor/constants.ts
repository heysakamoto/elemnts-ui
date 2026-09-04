export const PRODUCTS = [
	{
		id: "recurring",
		label: "Recurring",
		icon: "tabler:campfire-filled",
		children: [
			{
				id: "starter",
				label: "Starter",
				price: 9.99,
				recommended: false,
				polar: {
					id: "84c7ad49-b7d8-4c13-99d7-16b4e6049454",
				},
			},
			{
				id: "pro",
				label: "Pro",
				price: 29.99,
				recommended: false,
				polar: {
					id: "de4b197b-2688-4fdf-9404-799a91ff75f6",
				},
			},
			{
				id: "agency",
				label: "Agency",
				price: 99.99,
				recommended: true,
				polar: {
					id: "4aa7a9e0-d2de-4cd3-b6a9-180774ccaefb",
				},
			},
			{
				id: "business",
				label: "Business",
				price: 199.99,
				recommended: false,
				polar: {
					id: "e53f273f-a1a1-44bc-a1a3-c01e855156f3",
				},
			},
			{
				id: "scale",
				label: "Scale",
				price: 499.99,
				recommended: false,
				polar: {
					id: "0b4c98a4-8dcb-4bf4-9d7f-eb3b77ab9b25",
				},
			},
			{
				id: "enterprise",
				label: "Enterprise",
				price: 999.99,
				recommended: false,
				polar: {
					id: "eb114d5a-2d38-420e-918c-57cfc04e9e12",
				},
			},
		],
	},
	{
		id: "one-time",
		label: "One-time",
		icon: "tabler:star-filled",
		children: [
			{
				id: "supporter",
				label: "Supporter",
				price: 4.99,
				recommended: false,
				polar: {
					id: "c280de7b-8ff4-40e0-b249-08f128f2288c",
				},
			},
			{
				id: "name-your-price",
				label: "Name your price",
				price: 2.99,
				recommended: true,
				polar: {
					id: "6048ee8c-ae2a-4dbe-ac62-a40f746fcfea",
				},
			},
		],
	},
];
