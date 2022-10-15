$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoWidth: true,
        navText: [ '', '' ],
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 10000,
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


