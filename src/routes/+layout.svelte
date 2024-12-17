<script>
    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";

    import { onMount } from "svelte";

    let box // .icy-overlay
    let timeoutId
    let isInactive = false
    let opacityFreeze = 0
    let sound = new Audio("/video/ice-crack.mp3");

    function toggleOverlay(inactive) {
        isInactive = inactive;
        if (inactive) {
            console.log('freeze')
            opacityFreeze = 100
            sound.play();
        } else {
            console.log('unfreeze')
            opacityFreeze = 0
            
        }
    }

    function resetTimer() {
        if (isInactive) {
            toggleOverlay(false)
        }

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => toggleOverlay(true), 10000)
    }

    onMount(() => {
        window.addEventListener("mousemove", resetTimer)

        resetTimer()

        return () => {
            window.removeEventListener("mousemove", resetTimer);
            clearTimeout(timeoutId);
        }
    })

    
    
</script>

<Header />

<main><slot /></main>

<Footer />

<div bind:this={box} class="icy-overlay" style="--opacity-freeze: {opacityFreeze}"></div>

<style>
    .icy-overlay {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(31, 31, 138, 0.105);
        background-image: url('/images/icy.png');
        background-size: cover;
        /* mix-blend-mode: multiply; */
        --opacity-freeze: 100%;
        opacity: calc(var(--opacity-freeze) * 1%);
        z-index: 9;
        pointer-events: none;
        transition: opacity 5s cubic-bezier(0.165, 0.84, 0.44, 1);

    }

</style>