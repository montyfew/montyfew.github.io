// Look for any hidden objects and smoothly make them visible by removing their hidden class
const toReveal = [...document.querySelectorAll('.smooth-reveal')];

toReveal.map(h => {
    setTimeout(function() { 
        h.classList.remove("hidden");
    }, 10)
})

const body = document.querySelector('body');
const main = document.querySelector('main');
const title = document.querySelector('header h1');
const home = document.querySelector('header nav a.exit')
const header = document.querySelector('header')
home.onclick = (e) => {
    const a = e.srcElement;
    e.preventDefault();
    if(window.location.pathname !== "/") {
        body.classList.add('smooth-reveal');
        body.classList.add('hidden');
        setTimeout(function() { 
            window.location.href = a.href
        }, 1000)
    }
};
