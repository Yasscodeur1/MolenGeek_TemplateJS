let sidenav = document.getElementById("colla");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}



// var sidenav = document.getElementById("colla");
// var openBtn = document.getElementById("openBtn");
// var closeBtn = document.getElementById("closeBtn");

// // Fonction pour vérifier la largeur de l'écran
// function isMobile() {
//   return window.innerWidth < 1024;
// }

// // Ouvre le menu latéral si l'écran est mobile (moins de 1024px)
// openBtn.onclick = function () {
//   if (isMobile()) {
//     sidenav.classList.add("active");
//   }
// };

// // Ferme le menu latéral
// closeBtn.onclick = function () {
//   sidenav.classList.remove("active");
// };

// // Réactive le burger si l'écran change de taille
// window.onresize = function () {
//   if (!isMobile()) {
//     sidenav.classList.remove("active");
//   }
// };
