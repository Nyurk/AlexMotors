const $ = window.$;

$(document).on('ready', function () {

    $('#gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.gallery-holder .btn-prev'),
        nextArrow: $('.gallery-holder  .btn-next'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: true,
                    verticalSwiping: true,
                }
            },
        ]
    });


    $('#product-gallery').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: $('.product-gallery-holder .btn-prev'),
        nextArrow: $('.product-gallery-holder .btn-next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    });


    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.carousel-holder .btn-prev'),
        nextArrow: $('.carousel-holder  .btn-next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    });


    // $('.reviews-gallery').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1
    //     prevArrow: $('.carousel-holder .btn-prev'),
    //     nextArrow: $('.carousel-holder  .btn-next'),
    // });

});

const openers = document.querySelectorAll('#footer .col h3');

openers.forEach((opener) => {
    opener.addEventListener('click', () => {
        const parent = opener.parentNode;
        parent.classList.toggle('active');
    })
})

