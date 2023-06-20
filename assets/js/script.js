const headerMenu = document.querySelector('.header-menu-links');
const headerButton = document.querySelector('.header-menu-button');
function toggleMenu() {
  headerMenu.classList.toggle('visibility');
}
headerMenu.addEventListener('click', toggleMenu);
headerButton.addEventListener('click', toggleMenu);