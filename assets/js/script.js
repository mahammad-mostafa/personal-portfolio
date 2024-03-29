let projectIndex = null;
let formValues = { name: '', email: '', message: '' };
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
const contactForm = document.querySelector('#contact form');
const contactMessage = document.querySelector('#contact small');
const projects = [
  {
    id: '1',
    image: 'assets/img/works/conference.png',
    title: 'Global Game Summit',
    description: 'This is the capstone project for the first module in Microverse program. It represents a conference event for video game development.',
    technologies: ['CSS3', 'HTML5', 'JavaScript'],
    source: 'https://github.com/mahammad-mostafa/game-industry-conference-site',
    live: 'https://mahammad-mostafa.github.io/game-industry-conference-site',
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
function validateFields() {
  if (contactForm.name.validity.valueMissing) {
    contactMessage.textContent = 'Name field is required!';
  } else if (contactForm.email.validity.valueMissing) {
    contactMessage.textContent = 'Email field is required!';
  } else if (contactForm.email.validity.typeMismatch) {
    contactMessage.textContent = 'Valid email is required!';
  } else if (contactForm.email.value.match('[A-Z]')) {
    contactMessage.textContent = `Email must be in lowercase format. Use this format: ${contactForm.email.value.toLowerCase()}`;
  } else if (contactForm.message.validity.valueMissing) {
    contactMessage.textContent = 'Message field is required!';
  } else {
    contactMessage.textContent = '';
  }
}
function fillForm() {
  if (localStorage.getItem('formValues') !== null) {
    formValues = JSON.parse(localStorage.getItem('formValues'));
  }
  Object.keys(formValues).forEach((key) => {
    contactForm[key].value = formValues[key];
  });
}
function submitForm(event) {
  event.preventDefault();
  validateFields();
  if (contactMessage.textContent.length === 0) {
    if (contactMessage.classList.contains('visibility')) {
      contactMessage.classList.remove('visibility');
    }
    contactForm.submit();
  } else {
    contactMessage.classList.add('visibility');
  }
}
function storeForm(event) {
  if (event.target.name in formValues) {
    formValues[event.target.name] = event.target.value;
    localStorage.setItem('formValues', JSON.stringify(formValues));
  }
}
function clearForm() {
  localStorage.clear();
  if (contactMessage.classList.contains('visibility')) {
    contactMessage.classList.remove('visibility');
  }
}
worksGrid.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
headerMenu.addEventListener('click', toggleMenu);
headerButton.addEventListener('click', toggleMenu);
popupControls[0].addEventListener('click', previousPopup);
popupControls[1].addEventListener('click', nextPopup);
contactForm.addEventListener('submit', submitForm);
contactForm.addEventListener('change', storeForm);
contactForm.addEventListener('reset', clearForm);
window.addEventListener('scroll', pageScroll);
headerlinks.shift();
headerlinks.pop();
fillGrid();
fillForm();