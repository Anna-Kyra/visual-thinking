<script>
  export let x;
</script>

<div class="page-transition" style="--page-transition-clr: {x};"></div>

<style>
  .page-transition {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: translate(-100%, -100%);
  pointer-events: none;
  --page-transition-clr: blue;
  border: solid 2px black;
  background-color: var(--page-transition-clr);
  view-transition-name: page-transition;
}
</style>