//NavBar - Hamburger menu
const hamburgerMenu = document.querySelector(".fa-bars");
const navMenu = document.querySelector(".nav-menu-overlay");
const closeMenu = document.querySelector(".close-menu");

hamburgerMenu.addEventListener("click", () =>{
  navMenu.style.transform = "translateX(0)";
})

closeMenu.addEventListener("click", () =>{
  navMenu.style.transform = "translateX(-2000px)";
})
document.body.addEventListener('touchstart',(e) => {
    if (!navMenu.contains(e.target)) {
      navMenu.style.transform = "translateX(-2000px)";
    }
    });
  const mobileNav = document.querySelectorAll(".mobile-link");
    mobileNav.forEach((item) =>{
      item.addEventListener('click', (e) =>{
        navMenu.style.transform = "translateX(-2000px)";
      });
  });

//Services Hover
const cardHover = document.querySelectorAll(".content-card");

cardHover.forEach((items) => {
  items.addEventListener("mouseover", () => {
    items.style.backgroundColor = "#0a0a2e";parent
    items.children[0].style.color = "white";
    items.children[1].style.color = "white";
    items.children[2].style.color = "white";
    items.children[3].style.color = "white";
  });
});
cardHover.forEach((items) => {
  items.addEventListener("mouseleave", () => {
    items.style.backgroundColor = "white";
    items.children[0].style.color = "#0a0a2e";
    items.children[1].style.color = "#0a0a2e";
    items.children[2].style.color = "#0a0a2e";
    items.children[3].style.color = "#22bec9";
  });
});