export {};

declare module "*.svg" {
	const content: any;
}

declare global {
	interface Window {
		kakao: any;
	}
}
