<script>
    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";
	import PageTransition from "$lib/molecules/footer.svelte";
    
    import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});



	// export const x = 'red';

</script>

<Header />

<main><slot /></main>

<Footer />

<PageTransition	x="green"/>

<!-- <div class="page-transition" style="--page-transition-clr: {x};"></div> -->

<style>
    

</style>

