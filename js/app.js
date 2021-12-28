const links = document.querySelectorAll(".header .links ul li a");
const copy_date = document.querySelector(".copy-date");

copy_date.innerText = new Date().getFullYear();

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector("." + link.dataset.link);
    section.scrollIntoView();
  });
});
