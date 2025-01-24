// navbar
let sidenav = document.getElementById("colla");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

let linkElement = document.querySelectorAll('.link, .burger ')

linkElement.forEach(element => {
  element.addEventListener('mouseover', (event) => {
    event.target.style.border = 'drop-shadow(0 0 0.5rem crimson)'
    event.target.style.borderWidth = '50px'
    event.target.style.borderRadius = '10px'
    event.target.style.borderBottom = 'outset'
    event.target.style.backgroundColor = 'linear-gradient( #fdfdfd, #87CEEB)'
    event.target.style.color = '#000'
      
  })
  element.addEventListener('mouseout', (event) => {
    event.target.style.filter = ''
    event.target.style.boxShadow = ''
    event.target.style.border = ''
    event.target.style.backgroundColor = ''
    event.target.style.color = ''
  })
});

// // direger le bouton contact dans navbar vers la section contact
// document.querySelector('a[href=".contact"]').addEventListener('click', function(e) {
//   e.preventDefault();
//   document.querySelector('.contact').scrollIntoView({
//     behavior: 'smooth'
//   });
// });


// carousel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function moveSlide(step) {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + step + items.length) % items.length;
  items[currentIndex].classList.add('active');
}

// Défilement automatique toutes les 10 secondes
setInterval(() => {
  moveSlide(1); // Passe à la diapositive suivante
}, 2000);
