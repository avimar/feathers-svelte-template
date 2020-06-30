<script>
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial" target="_blank">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

	You'll probaby want a <a href="https://svelte-community.netlify.app/code/?tag=routers" target="_blank">client side router</a>. <br>
	<a href="https://github.com/ItalyPaleAle/svelte-spa-router" target="_blank">ItalyPaleAle/svelte-spa-router</a> seems good.<br>

	<h2>HOW TO USE:</h2>
	<ul>
	<li>You can probably run `feathers generate app` to reset just the feathers part with your own configuration, certainly if you pull from git you can see if it changed anything you'll want. I didn't include a config file, but default `users` is set to use knex & PG.</li>
	<li>The src/services/ folder is the root for your feathers services. Store your svelte components in the same place. Prefix everything with web- if it's just for the web so nodemon will ignore it.</li>
	<li>You will have to modify your main files in public/ if necessary.</li>
	<li>run: `npm run dev` will put rollup in watch mode and nodemon on feathers, in one cli</li>
	<li>run: `npm run build` to compile svelte</li>
	</ul>

	Some suggestons: <br>
	icons: svelte-fa & @fortawesome/free-solid-svg-icons are pretty nice.<br>
	pm2 for keeping the server running in production<br>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>