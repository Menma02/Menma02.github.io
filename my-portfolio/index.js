// NavBar Humburger
function toggleMenu() {
    document.querySelector(".navbar ul").classList.toggle("show");
}

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
  