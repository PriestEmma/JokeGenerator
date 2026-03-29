const nav = document.querySelector('.nav');

function toggleTransparency() {
  if (window.scrollY > 444) {
    nav.classList.add('sticky');
  } else if (window.scrollY > 770) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
window.addEventListener('scroll', toggleTransparency);

const cards = document.querySelectorAll('.cards');

document.addEventListener('DOMContentLoaded', () => {
  cards.forEach((c) => c.classList.remove('active'));
});

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    cards.forEach((c) => c.classList.remove('active'));

    card.classList.add('active');

    e.stopPropagation();
  });
});

document.addEventListener('click', () => {
  cards.forEach((c) => c.classList.remove('active'));
});

cards.forEach((card) => {
  card.addEventListener('mouseover', (e) => {
    cards.forEach((c) => c.classList.remove('active'));

    card.classList.add('active');

    e.stopPropagation();
  });
});

document.addEventListener('mouseout', () => {
  cards.forEach((c) => c.classList.remove('active'));
});

const images = document.querySelectorAll('.photo img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach((img) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
