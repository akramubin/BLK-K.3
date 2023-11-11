const navbarNav = document.querySelector(".bx");
let menuOpen = document.querySelector(".navbar > ul");

navbarNav.addEventListener("click", () => {
  navbarNav.classList.toggle("bx-x");
  menuOpen.classList.toggle("active");
});
