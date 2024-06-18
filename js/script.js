// set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (ent.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// image slider

const modal = document.getElementById('img-modal');

const stepImg = document.getElementsByClassName('step-img');

const x = document.getElementsByClassName('close')[0];

// When the user clicks on an image, open the modal

for (let i = 0; i < stepImg.length; i++) {
  stepImg[i].onclick = function () {
    modal.style.display = 'block';
  };
}

// When the user clicks on (x), close the modal
x.onclick = function () {
  modal.style.display = 'none';
};
