// Look for any hidden objects and smoothly make them visible by removing their hidden class
const toReveal = [...document.querySelectorAll('.smooth-reveal')];

toReveal.map(h => {
    setTimeout(function() { 
        h.classList.remove("hidden");
    }, 10)
})