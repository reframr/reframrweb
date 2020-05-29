<script>
	export let user = { loggedIn: false };

	import { signIn } from './Blockstack.js';
	import { signOut } from './Blockstack.js';
</script>

<main>
	<div class="two">
		<div class="two-one">
			<span id="title">reframr</span>
		<!--</div>
		 <div class="two-two">
			{#if user.loggedIn}
				<button on:click={ signOut }>
					Log out
				</button>
			{:else}
				<button on:click={ signIn }>
					Log in
				</button>
			{/if}
		</div> -->
	</div>
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	#title {
		text-align: left;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>