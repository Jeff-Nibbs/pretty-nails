const navLinks = document.getElementsByClassName('nav-link');
const [...nav] = navLinks;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
const navBar = document.getElementById('navBar');
let lastScroll = window.scrollY;

const atMiddle = (element) => {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const rect = element.getBoundingClientRect();
  const middle = viewportWidth / 2;
  
  if (middle < rect.left && window.pageYOffset < 500) {
    console.log('right');
    element.firstChild.classList.add('white');
  } else {
    console.log('left');
    element.firstChild.classList.remove('white');
  }
}

nav.map(e => (
  atMiddle(e)
));

document.addEventListener('click', function () {
  nav.map(e => (
    atMiddle(e)
  ));
});

document.addEventListener('scroll', function () {
  nav.map(e => (
    atMiddle(e)
  ));

  if (lastScroll < window.scrollY) {
    navBar.classList.add('nav-hidden');
  } else {
    navBar.classList.remove('nav-hidden');
  }
  lastScroll = window.scrollY;
});

window.onscroll = function () {
  if (window.pageYOffset > 500) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
}

window.addEventListener('scroll', () => {
  
    }
  )
