// Burger Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Form Submission Handler for Contact Section
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simulate form submission (here you would typically send the form data to a server)
    const formMessage = document.getElementById("formMessage");
    formMessage.innerText = "Thank you! Your message has been submitted.";
    formMessage.style.color = "green";

    // Clear the form
    document.getElementById("contactForm").reset();

    // Hide the message after 3 seconds
    setTimeout(() => {
        formMessage.innerText = "";
    }, 3000);
}

// Form Submission Handler for Register Section
function submitRegisterForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simulate form submission (here you would typically send the form data to a server)
    const registerMessage = document.getElementById("registerMessage");
    registerMessage.innerText = "Thank you for registering!";
    registerMessage.style.color = "green";

    // Clear the form
    document.getElementById("registerForm").reset();

    // Hide the message after 3 seconds
    setTimeout(() => {
        registerMessage.innerText = "";
    }, 3000);
}
