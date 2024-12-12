<script>
  import Introduction from "$lib/molecules/introduction.svelte";
  import Homepage from "$lib/organisms/homepage.svelte";
  import PageTransition from "$lib/atoms/pageTransition.svelte";

  export let data

  const {page} = data;
</script>

<div class="hexagons">
  <Introduction data={page}/>
  <Homepage />
</div>
<PageTransition	x="var(--vtYellow)"/>
