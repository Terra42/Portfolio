// get current year
const yearElm = document.querySelector('#year');
const year = new Date().getFullYear();
yearElm.textContent = year;

// close menu
const menuBtn = document.querySelector('#menu-btn');
const hamburger = document.querySelector('#burger');
const navigation = document.querySelector('#nav');
const menuNav = document.querySelector('#menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

const closeMenu = () => {
  hamburger.classList.remove('open');
  navigation.classList.remove('open');
  menuNav.classList.remove('open');
  navItems.forEach((item) => item.classList.remove('open'));
  showMenu = false;
};

navItems.forEach((item) => item.addEventListener('click', closeMenu));

// toggle menu

const toggleMenu = () => {
  if (!showMenu) {
    hamburger.classList.add('open');
    navigation.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach((item) => item.classList.add('open'));
    showMenu = true;
  } else {
    closeMenu();
  }
};

menuBtn.addEventListener('click', toggleMenu);

// show header

const header = document.querySelector('#header');
const headerTitle = document.querySelector('#header-title');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const projects = document.querySelector('#projects');
const contacts = document.querySelector('#contacts');
const home = document.querySelector('#home');

const showHeader = () => {
  let aboutPosition = about.offsetTop - window.scrollY;
  let skillsPosition = skills.offsetTop - window.scrollY;
  let projectsPosition = projects.offsetTop - window.scrollY;
  let contactsPosition = contacts.offsetTop - window.scrollY;

  console.log(aboutPosition);

  if (aboutPosition <= 70) {
    headerTitle.textContent = 'About Me';
    header.classList.add('scroll');
    headerTitle.classList.add('scroll');
  }

  if (skillsPosition < 10) {
    headerTitle.textContent = 'Skills';
  }

  if (projectsPosition < 10) {
    headerTitle.textContent = 'Projects';
  }

  if (contactsPosition < 10) {
    headerTitle.textContent = 'Contact me';
  }

  if (aboutPosition > 100) {
    headerTitle.textContent = '';
    header.classList.remove('scroll');
    headerTitle.classList.remove('scroll');
  }
};

document.addEventListener('scroll', showHeader);
