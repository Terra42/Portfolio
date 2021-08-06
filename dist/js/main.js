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

// mark active nav link
const navLinks = document.querySelectorAll('.menu-nav__link');

const markActive = (event) => {
  navLinks.forEach((item) => item.classList.remove('active'));
  event.target.classList.add('active');
};

navLinks.forEach((item) => item.addEventListener('click', markActive));

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
const about = document.querySelector('#about');

const showHeader = () => {
  let aboutPosition = about.offsetTop - window.scrollY;

  if (aboutPosition <= 70) {
    header.classList.add('scroll');
  }

  if (aboutPosition > 100) {
    header.classList.remove('scroll');
  }
};

document.addEventListener('scroll', showHeader);
