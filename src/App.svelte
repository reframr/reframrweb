<link href="https://cdn.jsdelivr.net/gh/jetavators/airframe@master/airframe.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">

<script>

	export let user = { loggedIn: false };

	export function signOut(){
		user.loggedIn = false;
		console.log(user.loggedIn);
	}

	export function signIn(){
		user.loggedIn = true;
		console.log(user.loggedIn);
	}
	
</script>

<style>
	* {
		font-family: 'DM Sans', sans-serif;
	}
	
	#top-one {
		text-align: left;
		padding-left: 1em;
		font-size: 2rem;
	}
	
	#top-two {
		text-align: right;
		padding-right: 1em;
		font-size: 1rem;
	}
</style>

<div class="two">
	<div class="two-one" id="top-one">
		<span>reframr</span>
	</div>

	<div class="two-two" id="top-two">
		{#if user.loggedIn}
			<button on:click={ signOut }>
				Log out
			</button>
		{:else}
			<button on:click={ signIn }>
				Log in
			</button>
		{/if}
	</div>
</div>