const links = [...document.querySelectorAll('header a')];
const header = document.querySelector('header');
console.log(links);
links.map(a => {
  a.onclick = (e) => {
    const a = e.srcElement;
    console.log(a);
    e.preventDefault();
    header.classList.add('top');
    setTimeout(function() { 
        window.location.href = a.href
    }, 1000)
  }
})