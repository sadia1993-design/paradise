"use strict";function _defineProperty(e,i,s){return i in e?Object.defineProperty(e,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[i]=s,e}jQuery,jQuery(document).ready(function(e){e(".slider-inner-wrap.slider-active").slick({infinite:!0,slidesToShow:1,dots:!0,nav:!0,loop:!0,slidesToScroll:1}),e(".testimonial-active").slick({slidesToShow:1,arrows:!1,fade:!1,asNavFor:".testimonial-imges",slidesToScroll:1}),e(".testimonial-imges").slick(_defineProperty({slidesToShow:3,dots:!1,centerMode:!0,focusOnSelect:!0,variableWidth:!0,useCss:!0,centerPadding:0,asNavFor:".testimonial-active",slidesToScroll:1,prevArrow:'<i class="fa fa-angle-left prev"></i>'},"prevArrow",'<i class="fa fa-angle-right next"></i>')),e(""),e(".counter").counterUp({delay:10,time:1e3}),e(".active-services").slick({infinite:!0,slidesToShow:4,dots:!0,nav:!0,loop:!0,slidesToScroll:1,autoplay:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}),jQuery(window).load(function(){});