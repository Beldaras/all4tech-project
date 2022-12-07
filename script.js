// navbar

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
	showDivs((slideIndex += n));
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName('slideshow');
	if (n > x.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	x[slideIndex - 1].style.display = 'block';
}
