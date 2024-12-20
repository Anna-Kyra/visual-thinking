console.log('werkt!!')

let soundBell = new Audio('/video/bell_sound.mp3')

let links = document.querySelectorAll("a, span")
links.forEach(function(link) {
    link.addEventListener("click", function() {
        // console.log('Link geklikt')
        soundBell.play()
    })
})