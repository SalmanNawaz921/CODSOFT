const dynamicTextElements = document.querySelectorAll(".typing");
const words = ["Web Designer", "Web Developer", "Freelancer"];

dynamicTextElements.forEach((dynamicText) => {
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 100);
    } else {
      isDeleting = !isDeleting;
      dynamicText.classList.remove("stop-blinking");
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 1200);
    }
  };

  typeEffect();
});
document.addEventListener("DOMContentLoaded", function () {
  // sticky navbar on scroll script
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  var menu = document.querySelector(".navbar .menu");
  var menuIcon = document.querySelector(".menu-btn i");
  var menuLinks = document.querySelectorAll(".navbar .menu li a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // applying smooth scroll on menu items click
      document.documentElement.style.scrollBehavior = "smooth";
      menu.classList.toggle("active");
      menuIcon.classList.toggle("active");
    });
  });
  // toggle menu/navbar script
  var menuBtn = document.querySelector(".nav-btn :nth-child(2)");
  menuBtn.addEventListener("click", function (e) {
    console.log(e.target);
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      navbar.style.backgroundColor = "var(--primary-color)";
    } else {
      navbar.style.backgroundColor = "";
    }
    menuIcon.classList.toggle("active");
  });
});

//Function to TOGGLE DARKMode()

function darkMode() {
  var icon = document.querySelector(".navbar .menu i");
  var newIcon = document.querySelector(".nav-btn .fa-regular");
  var body = document.body;
  var computedIconStyle = getComputedStyle(icon).display;
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    if (computedIconStyle !== "none") {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      newIcon.classList.remove("fa-sun");
      newIcon.classList.add("fa-moon");
    }
  } else {
    if (computedIconStyle !== "none") {
      icon.classList.add("fa-sun");
      icon.classList.remove("fa-moon");
    } else {
      newIcon.classList.add("fa-sun");
      newIcon.classList.remove("fa-moon");
    }
  }
}
