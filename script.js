/* const sidenav = document.querySelector("#mySidenav");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
/*function openNav() {
    sidenav.classList.add("active");
 } */


/* Set the width of the side navigation to 0 */
/*function closeNav() {
    sidenav.classList.remove("active");
}

*/

const menuBurger = document.querySelector('.menu-burger');
const navLinks = document.querySelector('.nav-links');
const openBtn = 'menu-btn.png';
const closeBtn = 'close-menu-btn.png';

menuBurger.addEventListener('click', () => {
	navLinks.classList.toggle('mobile-menu');
	if ([...navLinks.classList].includes('mobile-menu')) {
		document.querySelector('.menu-burger').src = closeBtn;
	} else {
		document.querySelector('.menu-burger').src = openBtn;
	}
});



/* Mobile slideshos */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
};