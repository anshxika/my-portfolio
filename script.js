var options = {
    strings: ["Web Developer", "Programmer", "Cybersecurity Enthusiast", "Java Developer", "Open Source Contributor", "Learner", "Tech Enthusiast"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  };
  
  var typed = new Typed("#typed", options);
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}