<script>
    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";

    import { onMount } from "svelte";

    let box // .icy-overlay
    let wrapper
    let timeoutId
    let isInactive = false
    let opacityFreeze = 0
    let soundIce
    let soundBrrr

    function toggleOverlay(inactive) {
        isInactive = inactive;
        if (inactive) {
            console.log('freeze')
            opacityFreeze = 100
            soundIce.play()
            // console.log(sound)
            wrapper.classList.remove('brrr')

        } else {
            console.log('unfreeze')
            opacityFreeze = 0
            wrapper.classList.add('brrr')
            soundBrrr.play()
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
        soundIce = new Audio("/video/ice-crack.mp3")
        soundBrrr = new Audio("/video/brr-sound.mp3")
        // console.log(sound)
        window.addEventListener("mousemove", resetTimer)
        window.addEventListener("scroll", resetTimer)
        resetTimer()
        
        return () => {
            window.removeEventListener("mousemove", resetTimer)
            window.removeEventListener("scroll", resetTimer)
            clearTimeout(timeoutId)
        }
    })
    
    
</script>

<div bind:this={wrapper} class="wrapper brrr">
    <Header />

    <main><slot /></main>
    
    <Footer />
</div>

<div bind:this={box} class="icy-overlay" style="--opacity-freeze: {opacityFreeze};"></div>

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

    .brrr {
        animation: brrr 300ms linear;
    }

    @keyframes brrr {
        0% {
            transform: translate(0, 0);
        }
        20% {
            transform: translate(-20px);
        }
        50% {
            transform: translate(20px);
        }
        80% {
            transform: translate(-20px);
        }
        100% {
            transform: translate(0, 0);
        }
    }

</style>