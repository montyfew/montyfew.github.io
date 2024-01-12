const links = [...document.querySelectorAll('header a')];
const header = document.querySelector('header');

links.map(a => {
  a.onclick = (e) => {
    const a = e.srcElement;
    e.preventDefault();
    header.classList.add('top');
    setTimeout(function() { 
        window.location.href = a.href
    }, 1000)
  }
});

onpageshow = (event) => {
    console.log(event);
    header.classList.remove('top');
};