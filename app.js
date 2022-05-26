// ============ menuCarousel ============

$('#menuCarousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,

    slideTransition: 'linear',
    // autoplayTimeout: 3000,
    autoplaySpeed: 1100,

    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// ============ feedbackCarousel ============

$('#feedbackCarousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    center: true,

    slideTransition: 'linear',
    // autoplayTimeout: 3000,
    // autoplaySpeed: 1100,

    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// ============ javaCarousel ============

$('#javaCarousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,

    slideTransition: 'linear',
    // autoplayTimeout: 3000,
    autoplaySpeed: 1100,

    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})