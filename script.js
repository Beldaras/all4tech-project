// navbar

const menuBurger = document.querySelector('.menu-burger');
const navLinks = document.querySelector('.nav-links');
const openBtn = '/Ressources/Images/menu-btn-black.png';
const closeBtn = '/Ressources/Images/close-menu-btn-black.png';

menuBurger.addEventListener('click', () => {
	navLinks.classList.toggle('mobile-menu');
	if ([...navLinks.classList].includes('mobile-menu')) {
		document.querySelector('.menu-burger').src = closeBtn;	
			
	} else {
		document.querySelector('.menu-burger').src = openBtn;
	}
});

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
// 	showDivs((slideIndex += n));
// }

// function showDivs(n) {
// 	var i;
// 	var x = document.getElementsByClassName('slideshow');
// 	if (n > x.length) {
// 		slideIndex = 1;
// 	}
// 	if (n < 1) {
// 		slideIndex = x.length;
// 	}
// 	for (i = 0; i < x.length; i++) {
// 		x[i].style.display = 'none';
// 	}
// 	x[slideIndex - 1].style.display = 'block';
// }

// carousel

const slidesContainer = document.getElementById('slides-container');
const slide = document.querySelector('.slide');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');

nextButton.addEventListener('click', () => {
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener('click', () => {
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft -= slideWidth;
});



