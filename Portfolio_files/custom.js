//Header Js
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Toggle Navbar Menu on Burger Click
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Closed Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth >= 769) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});


$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
      $(".header").addClass("Sticky");
  } else {
      $(".header").removeClass("Sticky");
  }
});

//Typewriter Js
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Web Developer", "Web Designer", "UI Designer", "Learner..."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})


// Navbar Js
;(function($) {
    $(function() {
      $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this)
          .siblings('.nav-dropdown')
          .slideToggle()
        $('.nav-dropdown')
          .not($(this).siblings())
          .hide()
        e.stopPropagation()
      })
      $('html').click(function() {
        $('.nav-dropdown').hide()
      })
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active')
      })
    })
  })(jQuery)

  // Testimonial Js
  $('.testimonials').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    dots:true,
	 responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

// owlCarousel Js
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:6
        }
    }
})
