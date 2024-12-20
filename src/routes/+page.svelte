<script>
  import Introduction from "$lib/molecules/introduction.svelte";
  import Homepage from "$lib/organisms/homepage.svelte";

  export let data

  const {page} = data;
</script>

<div class="hexagons landing-page">
  <Introduction data={page}/>
  <Homepage />
</div>

<style>
  :global(.landing-page h1) {
      position: relative;
  }

  :global(.landing-page h1::before), :global(.landing-page h1::after) {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 0;
    width: 182px;
    height: 92px;
    /* background-color: aqua; */
    background-image: url('/images/victorian-border-title.png');
    background-repeat: no-repeat;
    rotate: -10deg;
    transform: scaleX(-1) scale(.8);
    filter: hue-rotate(350deg);
  }

  :global(.landing-page h1::after) {
    transform: unset;
    left: unset;
    right: 0;
    rotate: 10deg;
    transform: scale(.8);
  }
</style>