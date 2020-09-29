
// DEBUT NAVIGATION + BURGER ///////////////////////////////////////////////////////////////////
const navSlide = () => { //function anonyme ?
    //Animation slider
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    //Nav links 
    const navLinks = document.querySelectorAll(".nav-links li")

    
    burger.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav-active');

        //Animate links 
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
            }
         });       
    });      
}
navSlide();
// FIN NAVIGATION + BURGER ///////////////////////////////////////////////////////////////////





// DEBUT PARALLAX ///////////////////////////////////////////////////////////////////
const parallax = document.querySelector(".parallax");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + "px";
});
// FIN PARALLAX ///////////////////////////////////////////////////////////////////






// DEBUT EN TETE  ///////////////////////////////////////////////////////////////////
const navi = document.querySelector("nav");
window.addEventListener('scroll', () => {
    if(window.scrollY > 150) {
        navi.classList.add('scroll');
    } else {
        navi.classList.remove('scroll');
    }
});
// FIN EN TETE  ///////////////////////////////////////////////////////////////////
