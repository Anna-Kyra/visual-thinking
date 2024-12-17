<script>
  export let titel;
  export let url;
  export let bgc;
</script>

<div class="breadcrumb" style="--bgc:{bgc}">
  {#if url}
    <a href="{url}">{titel}</a>
  {:else}
    <span>{titel}</span>
  {/if}
</div>
<style>
  div {
    background-color: var(--bgc);
    margin:0 -1rem;
    display: flex;
    gap: 1em;
    align-items: center;
    position: relative;

  }

  div::after {
    content: '';
    position: absolute;
    right: 0;
    width: 40%;
    height: 200%;
    /* background-color: aqua; */
    background-image: url('/images/christmas-border.png');
    background-size: auto 100%;
    background-repeat: repeat-x;
  }
  /* MOBILE - STYLING */
  a, span {
    text-transform: uppercase;
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.8rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 1rem;
    margin-top: 0%;
    /* width: 100vw; */
    display: flex;
    align-items: center;
    text-decoration:none;
  }

  a:hover {
    text-decoration: underline;
  }

</style>
