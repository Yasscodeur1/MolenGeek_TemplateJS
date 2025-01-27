// accodrion
const elements = document.querySelectorAll(".accordion-item button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  // Fermer tous les autres accordéons
  elements.forEach((item) => {
    item.setAttribute("aria-expanded", "false");
    item.nextElementSibling.style.maxHeight = null; // Réduire à zéro
  });

  // Déployer ou fermer l'élément courant
  if (itemToggle === "false") {
    this.setAttribute("aria-expanded", "true");
    const content = this.nextElementSibling; // Élément `accordion-content`
    content.style.maxHeight = content.scrollHeight + "px"; // Ajuste à la hauteur
  }
}

// Ajouter les écouteurs d'événements à chaque bouton
elements.forEach((item) => item.addEventListener("click", toggleAccordion));



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

// scroller vers le formulaire de contact
function scrollToContact() {
  document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
}


let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Fonction pour afficher la diapositive active
function showSlide(index) {
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    items[index].classList.add('active');
    dots[index].classList.add('active');
}

// Navigation via boutons précédent/suivant
function moveSlide(step) {
    currentIndex = (currentIndex + step + items.length) % items.length;
    showSlide(currentIndex);
}

// Clic sur les indicateurs (points)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(index);
    });
});

// Défilement automatique
const interval = setInterval(() => {
    moveSlide(1);
}, 5000);

// Arrêter le défilement automatique lors de l'interaction
prevButton.addEventListener('click', () => {
    clearInterval(interval);
    moveSlide(-1);
});

nextButton.addEventListener('click', () => {
    clearInterval(interval);
    moveSlide(1);
});

