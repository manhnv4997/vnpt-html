$(document).ready(function () {
    handleServiceSlides();
    showContactWidget();
});

function showContactWidget() {
    $('.contact-widget').addClass('--show');
}

function handleServiceSlides() {
    $('.service-slides').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: false,
        dots: true,
        arrows: false,
        prevArrow: "<button class='custom-prev slides-btn-custom d-none'><img src='/assets/svg/icon/prev-icon.svg'></button>",
        nextArrow: "<button class='custom-next slides-btn-custom'><img src='/assets/svg/icon/next-icon.svg'></button>",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3.5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    slidesToScroll: 3,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 567,
                settings: {
                    dots: false,
                    slidesToScroll: 1,
                    slidesToShow: 1.2,
                }
            },
        ],
    });

    if ($(window).width() <= 1300) {
        $('.custom-prev').addClass('d-none');
        $('.custom-next').addClass('d-none');
    }
}
