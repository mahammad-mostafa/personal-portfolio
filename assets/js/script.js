const worksGrid = document.querySelector('.works-grid');
const worksPopup = document.querySelector('.works-popup');
const headerMenu = document.querySelector('.header-menu-links');
const headerButton = document.querySelector('.header-menu-button');
const headerlinks = Array.from(document.querySelectorAll('.header-menu-links li'));
const pageSections = Array.from(document.querySelectorAll('#works, #about, #contact'));
const popupTitle = document.querySelector('.works-popup h3');
const popupClose = document.querySelector('.works-popup button');
const popupDescription = document.querySelector('.works-popup p');
const popupTechnologies = document.querySelector('.works-popup ul');
const popupButtons = document.querySelectorAll('.works-popup .button');
const popupImage = document.querySelector('.works-popup-container-flex img');
const projects = [
  {
    id: '1',
    image: 'assets/img/works.png',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard dummy text ever since the 1500s.',
    technologies: ['CSS', 'HTML', 'BootStrap', 'Ruby'],
    source: '#',
    live: '#',
  },
  {
    id: '2',
    image: 'assets/img/project.png',
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    source: '#',
    live: '#',
  },
  {
    id: '3',
    image: 'assets/img/project.png',
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    source: '#',
    live: '#',
  },
  {
    id: '4',
    image: 'assets/img/project.png',
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    source: '#',
    live: '#',
  },
  {
    id: '5',
    image: 'assets/img/project.png',
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    source: '#',
    live: '#',
  },
  {
    id: '6',
    image: 'assets/img/project.png',
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    source: '#',
    live: '#',
  },
  {
    id: '7',
    image: 'assets/img/project.png',
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    technologies: ['HTML', 'BootStrap', 'Ruby'],
    source: '#',
    live: '#',
  },
];
function fillGrid() {
  const fragment = new DocumentFragment();
  projects.forEach((project, index) => {
    const article = document.createElement('article');
    if (index === 0) {
      article.className = 'works-grid-banner';
    } else {
      article.className = 'works-grid-card';
    }
    let articelHtml = `<img src="${project.image}" alt="${project.title}" />`;
    articelHtml += '<div class="works-grid-flex">';
    articelHtml += `<h3>${project.title}</h3>`;
    articelHtml += `<p>${project.description}</p>`;
    articelHtml += `<ul>${project.technologies.map((technology) => `<li>${technology}</li>`).join('')}</ul>`;
    articelHtml += `<button id="${project.id}" class="button" type="button">See Project</button>`;
    articelHtml += '</div>';
    article.innerHTML = articelHtml;
    fragment.appendChild(article);
  });
  worksGrid.appendChild(fragment);
}
function fillPopup(project) {
  popupImage.src = 'assets/img/popup.png';
  popupTitle.textContent = project.title;
  popupDescription.textContent = project.description;
  popupTechnologies.innerHTML = project.technologies.map((technology) => `<li>${technology}</li>`).join('');
  popupButtons[0].setAttribute('href', project.live);
  popupButtons[1].setAttribute('href', project.source);
}
function openPopup(event) {
  if (event.target.id !== '') {
    const project = projects.find((project) => project.id === event.target.id);
    if (project !== undefined) {
      fillPopup(project);
      worksPopup.classList.add('visibility');
    }
  }
}
function closePopup() {
  worksPopup.classList.remove('visibility');
}
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
worksGrid.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
headerMenu.addEventListener('click', toggleMenu);
headerButton.addEventListener('click', toggleMenu);
window.addEventListener('scroll', pageScroll);
headerlinks.shift();
headerlinks.pop();
fillGrid();
