const headerMenu = document.querySelector('.header-menu-links');
const headerButton = document.querySelector('.header-menu-button');
const headerlinks = Array.from(document.querySelectorAll('.header-menu-links li'));
const pageSections = Array.from(document.querySelectorAll('#works, #about, #contact'));
function toggleMenu() {
  headerMenu.classList.toggle('visibility');
}
function pageScroll() {
  pageSections.forEach((section, index) => {
    if (section.getBoundingClientRect().top < 10 && section.getBoundingClientRect().bottom > 10) {
      headerlinks[index].classList.add('active-section');
    } else {
      headerlinks[index].classList.remove('active-section');
    }
  });
}
headerMenu.addEventListener('click', toggleMenu);
headerButton.addEventListener('click', toggleMenu);
window.addEventListener('scroll', pageScroll);
headerlinks.shift();
headerlinks.pop();