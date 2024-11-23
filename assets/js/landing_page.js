// The animation doesn't work so well on older phones so just
// disable it for anything that seems like it might be a phone
if (window.innerWidth > 620) {
  // If you click on any of these links you're going to a page inside this site
  // This should trigger the heading to smoothly move up
  const links = [...document.querySelectorAll("header nav a.enter")];

  // The landing page elements are all inside the body
  // which is position absolutely
  const body = document.querySelector("body");

  // When you click any of the links
  // 1. Add the class "top" to body to trigger the animation
  // 2. Follow the link after 1 second to complete the transition
  links.map((a) => {
    a.onclick = (e) => {
      const a = e.srcElement;
      e.preventDefault();
      body.classList.add("top");
      setTimeout(function () {
        window.location.href = a.href;
      }, 1000);
    };
  });

  // On some browsers going back doesn't
  // put the classes back to how they were
  // this is a fix for that
  onpageshow = (event) => {
    body.classList.remove("top");
  };
}
