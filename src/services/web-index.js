import App from './web-app.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;