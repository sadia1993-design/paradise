"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    /* home slider */
    $('.slider-inner-wrap.slider-active').slick({
      infinite: true,
      slidesToShow: 1,
      dots: true,
      nav: true,
      loop: true,
      slidesToScroll: 1
    });
    /* testimonial */

    $('.testimonial-active').slick({
      slidesToShow: 1,
      arrows: false,
      fade: false,
      asNavFor: '.testimonial-imges',
      slidesToScroll: 1
    });
    /* testimonial images */

    $('.testimonial-imges').slick(_defineProperty({
      slidesToShow: 3,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
      useCss: true,
      centerPadding: 0,
      asNavFor: '.testimonial-active',
      slidesToScroll: 1,
      prevArrow: '<i class="fa fa-angle-left prev"></i>'
    }, "prevArrow", '<i class="fa fa-angle-right next"></i>')); //bottom to top: 

    $(''); //counterup 

    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
    /* service slider */

    $('.active-services').slick({
      infinite: true,
      slidesToShow: 4,
      dots: true,
      nav: true,
      loop: true,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
      ]
    });
  });
  jQuery(window).load(function () {});
})(jQuery);