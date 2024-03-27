const links = [...document.querySelectorAll('header nav a')];
const header = document.querySelector('header');
const bio = document.querySelector('section.bio');

links.map(a => {
  a.onclick = (e) => {
    const a = e.srcElement;
    e.preventDefault();
    header.classList.add('top');
    bio.classList.add('top');
    setTimeout(function() { 
        window.location.href = a.href
    }, 1000)
  }
});

onpageshow = (event) => {
    console.log(event);
    header.classList.remove('top');
    bio.classList.remove('top');
};