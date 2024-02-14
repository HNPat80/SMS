$(document).ready(function(){
  // $('.carousel').slick({
  //   autoplay: true,
  //   autoplaySpeed: 2000, // Change image every 2 seconds
  //   dots: true, // Show navigation dots
  //   arrows: true // Show navigation arrows
  //   // Add more options as needed
  // });
  $('#carasoul .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    autoplay:true, // Enable auto-scrolling
    autoplayTimeout:3000, // Auto-scroll time in milliseconds (e.g., 3000ms = 3 seconds)
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });
  $('#Services .data-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    autoplay:true, // Enable auto-scrolling
    autoplayTimeout:5000, // Auto-scroll time in milliseconds (e.g., 3000ms = 3 seconds)
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  })
});