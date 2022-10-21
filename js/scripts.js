$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        freeDrag: true,
        autoWidth: false,
        mouseDrag : true,
        touchDrag : true,
        navText: [ '', '' ],
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 12000,
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



