<script>
	export let name;
	import Button from './Button/svelte';
</script>

<main>
	<div class="two">
		<div class="two-one">
			<span id="title">reframr</span>
		</div>

		<div class="two-two">
			<Button/>
		</div>
	</div>
</main>

<style>
	#title {
		text-align: left;
	}

	main {
		padding: 1em;
		margin: 0 auto;
		font-family: 'DM Sans', sans-serif;
	}

	@media (min-width: 640px) {
		#title {
			font-size: 5rem;
		}
	}

	@media (max-width: 640px){
		#title {
			text-align: left;
			font-size: 3rem;
		}
	}
</style>