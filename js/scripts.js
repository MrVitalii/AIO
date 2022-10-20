$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        freeDrag: true,
        autoWidth: false,
        navText: [ '', '' ],
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 20000,
        autoplaySpeed: 6500,
        responsive:{
            0:{
                items:1
            },

            1024:{
                items:1
            }
        }
    });
});



