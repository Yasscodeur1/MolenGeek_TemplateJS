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

let linkElement = document.querySelectorAll('.link, .burger')

linkElement.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.filter = 'drop-shadow(0 0 0.5rem crimson)'
        event.target.style.borderRadius = '10px'
        event.target.style.border = 'inset'
    })
    element.addEventListener('mouseout', (event) => {
        event.target.style.filter = ''
        event.target.style.boxShadow = ''
        event.target.style.border = ''
    })
});



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
