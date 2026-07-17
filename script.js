const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const heroSection = document.getElementById("home");
const offerSection = document.getElementById("offersec");
const coachingSection = document.getElementById("coaching");
const aboutSection = document.getElementById("about");
const testimonialSection = document.getElementById("testimonialsec");

hamburgerMenu.addEventListener('click', ()=>{
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    
});

document.querySelectorAll(".nav-link").forEach(p => p.addEventListener("click", () =>{
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
}));


function callbackFunction(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.id === "offersec"){
                entry.target.classList.add("tree")
            }
            console.log(entry.target.id);
        }
    });

}
const options = { 
    threshold: 0.45,
    rootMargin: "-80px"

}

const observer = new IntersectionObserver(
    callbackFunction, options
);

observer.observe(heroSection);
observer.observe(offerSection);
observer.observe(coachingSection);
observer.observe(aboutSection);
observer.observe(testimonialSection);


