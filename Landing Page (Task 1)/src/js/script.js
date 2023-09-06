document.addEventListener("DOMContentLoaded", () => {
  var nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });

  var menu = document.querySelector(".navbar .nav-menu");
  var menuIcon = document.querySelector(".menu-btn i");
  var menuLinks = document.querySelectorAll(".navbar .nav-menu li a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // applying smooth scroll on menu items click
      document.documentElement.style.scrollBehavior = "smooth";
      menu.classList.toggle("active");
      menuIcon.classList.toggle("active");
    });
  });
  // toggle menu/nav script
  var menuBtn = document.querySelector(".nav-btn i");
  menuBtn.addEventListener("click", function (e) {
    console.log(e.target);
    menu.classList.toggle("active");
    if (menu.classList.contains("active") && nav.classList.contains("sticky")) {
      nav.style.backgroundColor = "white";
      menu.style.backgroundColor = "white";
    } else if (
      menu.classList.contains("active") &&
      !nav.classList.contains("sticky")
    ) {
      nav.style.backgroundColor = " #ff9d2e";
      menu.style.backgroundColor = "#ff9d2e";
    } else {
      nav.style.backgroundColor = "";
      menu.style.backgroundColor = "";
    }
    menuIcon.classList.toggle("active");
  });
});
