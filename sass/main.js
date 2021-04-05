const menuWrapper = document.querySelector('.menu-wrapper');
const hamburgerMenu = document.querySelector('.hamburger-menu');

menuWrapper.addEventListener('click', function(){
    if(hamburgerMenu.classList.contains('animate')){
        hamburgerMenu.classList.remove('animate');
    }
    else {
        hamburgerMenu.classList.add('animate');
    }
});

const burger = document.querySelector('.menu-wrapper');
const nav = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.menu__Links');


// Toggle Nav
burger.addEventListener('click', function() {
		nav.classList.toggle('menu-active');
		nav.classList.add('transition');

		//animate links
		navLinks.forEach((link, index) => {
				if(link.style.animation){
					link.style.animation = ``
				} else{
					link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
				}
				});
});

    const navB = document.getElementsByClassName('.menu')[0];

    window.addEventListener(

      'resize',

      () => {

        if (window.innerWidth > 768) {

          nav.classList.remove('transition');

        }

      },

      false

    );