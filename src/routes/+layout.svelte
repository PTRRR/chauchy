<script lang="ts">
	// import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
</svelte:head>

{@render children()}

<style lang="scss">
	@font-face {
		font-family: Inter;
		src: url(/fonts/Inter/Inter-VariableFont_opsz,wght.ttf);
	}

	:global {
		html,
		body {
			margin: 0;
			padding: 0;
			font-family: Inter, Arial, Helvetica, sans-serif;
			/* overflow-x: hidden; */
			background-color: #fbfaf8;
		}

		html {
			font-size: 16px;
			font-weight: 500;
			line-height: 1.2;
		}

		@media screen and (max-width: 600px) {
			html {
				font-size: 12px;
			}
		}
	}
</style>
