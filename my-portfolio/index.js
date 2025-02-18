// NavBar Humburger
function toggleMenu() {
    document.querySelector(".navbar ul").classList.toggle("show");
}

// Get all links
const navLinks = document.querySelectorAll('.nav-link');

// Get current URL path
const currentPath = window.location.pathname;

// Loop through each link
navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');

    // Check if the current URL ends with the link's href
    if (currentPath.endsWith(linkHref) || 
        (linkHref.endsWith('index.html') && (currentPath === '/' || currentPath.endsWith('index.html')))) {
        link.classList.add('active');
    }
});



// Project Tab
function openTab(tabId, button) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Add active class to the clicked button
    button.classList.add('active');
}


// Typing Effect
const roles = ["Frontend Developer", "UI/UX Designer"];
let index = 0;
let charIndex = 0;
const spanElement = document.getElementById("role");
let typingSpeed = 100;
let deletingSpeed = 50;
let delayBetweenRoles = 2000;

function typeRole() {
  if (charIndex < roles[index].length) {
    spanElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(deleteRole, delayBetweenRoles);
  }
}

function deleteRole() {
  if (charIndex > 0) {
    spanElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteRole, deletingSpeed);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeRole, typingSpeed);
  }
}

typeRole(); 


// About page | slide message
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}








