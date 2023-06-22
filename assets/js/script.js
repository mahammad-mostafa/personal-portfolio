let projectIndex = null;
const worksGrid = document.querySelector('.works-grid');
const worksPopup = document.querySelector('.works-popup');
const headerMenu = document.querySelector('.header-menu-links');
const headerButton = document.querySelector('.header-menu-button');
const headerlinks = Array.from(document.querySelectorAll('.header-menu-links li'));
const pageSections = Array.from(document.querySelectorAll('#works, #about, #contact'));
const popupTitle = document.querySelector('.works-popup-container h3');
const popupImage = document.querySelector('.works-popup-container img');
const popupClose = document.querySelector('.works-popup-container button');
const popupDescription = document.querySelector('.works-popup-container p');
const popupTechnologies = document.querySelector('.works-popup-container ul');
const popupLinks = document.querySelectorAll('.works-popup-container-flex .button');
const popupControls = document.querySelectorAll('.works-popup-container-controls .button');
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
function fillPopup() {
  popupImage.src = projects[projectIndex].image;
  popupTitle.textContent = projects[projectIndex].title;
  popupDescription.textContent = projects[projectIndex].description;
  popupTechnologies.innerHTML = projects[projectIndex].technologies.map((technology) => `<li>${technology}</li>`).join('');
  popupLinks[0].setAttribute('href', projects[projectIndex].live);
  popupLinks[1].setAttribute('href', projects[projectIndex].source);
  if (projectIndex === 0) {
    popupControls[0].setAttribute('disabled', '');
  } else if (popupControls[0].hasAttribute('disabled')) {
    popupControls[0].removeAttribute('disabled');
  }
  if (projectIndex === projects.length - 1) {
    popupControls[1].setAttribute('disabled', '');
  } else if (popupControls[1].hasAttribute('disabled')) {
    popupControls[1].removeAttribute('disabled');
  }
}
function openPopup(event) {
  if (event.target.id !== '') {
    const project = projects.find((project) => project.id === event.target.id);
    if (project !== undefined) {
      projectIndex = projects.indexOf(project);
      fillPopup();
      worksPopup.classList.add('visibility');
      document.body.classList.add('scrolling');
    }
  }
}
function closePopup() {
  worksPopup.classList.remove('visibility');
  document.body.classList.remove('scrolling');
}
function previousPopup() {
  if (projectIndex === projects.length - 1) {
    popupControls[1].removeAttribute('disabled');
  }
  projectIndex -= 1;
  fillPopup();
}
function nextPopup() {
  if (projectIndex === 0) {
    popupControls[0].removeAttribute('disabled');
  }
  projectIndex += 1;
  fillPopup();
}
function toggleMenu() {
  if (window.screen.width < 768) {
    document.body.classList.toggle('scrolling');
    headerMenu.classList.toggle('visibility');
  }
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
popupControls[0].addEventListener('click', previousPopup);
popupControls[1].addEventListener('click', nextPopup);
window.addEventListener('scroll', pageScroll);
headerlinks.shift();
headerlinks.pop();
fillGrid();