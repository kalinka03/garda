$(function () {
    owl_icon();
    parallax();
    poput_wind();
});
function owl_icon() {
  $(".owl-lake").owlCarousel({
    slidesToShow: 5,
    slidesToScroll: 1,
    loop:true,
    marginleft: 5,
    marginright: 5,
    nav:true,
    item:5,
    navText : ["",""],
    responsive:{
      0:{
        items:1
      },
      767:{
        items:2
      },
      990:{
        items:3
      },
      1200:{
        items:3
      },
      1601:{
        items:5
      },
    }
  });
}
function parallax() {
 AOS.init({
  disable: 'mobile'
});
}

function poput_wind() {
    $("a[href=#js-popup-call]").fancybox();
}






