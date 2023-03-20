
$(function () {
  $('.hero-modal__list').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          
        },
      },
      {
        breakpoint: 374,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
