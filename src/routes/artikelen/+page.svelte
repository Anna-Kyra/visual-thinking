<script>
  import Articles from "$lib/organisms/articles.svelte";
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  import Introduction from "$lib/molecules/introduction.svelte";
  import PageTransition from "$lib/atoms/pageTransition.svelte";

  export let data;

  const {page, articles} = data
</script>

<Breadcrumb titel="Artikelen" bgc="var(--vtDarkBlue)" />
<Introduction data={page}/>
<Articles data={articles}/>

<PageTransition	x="var(--vtDarkBlue)"/>
