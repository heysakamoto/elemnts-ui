import { Polar } from "@polar-sh/sdk";

// const SANDBOX_ACCESS_TOKEN = import.meta.env.VITE_POLAR_SANDBOX_ACCESS_TOKEN!;
const PRODUCTION_ACCESS_TOKEN = import.meta.env
	.VITE_POLAR_PRODUCTION_ACCESS_TOKEN!;

export const polar = new Polar({
	server: "production",
	accessToken: PRODUCTION_ACCESS_TOKEN,
});
