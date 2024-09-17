$(document).ready(function () {
    handleServiceSlides();
    showMessenger();
});

function showMessenger() {
    $('.tu-van').addClass('--show');
    $('.messenger').addClass('--show');
}


function handleServiceSlides() {
    $('.service-slides').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: false,
        dots: true,
        arrows: true,
        prevArrow: "<button class='custom-prev slides-btn-custom d-none'><img src='assets/svg/icon/prev-icon.svg'></button>",
        nextArrow: "<button class='custom-next slides-btn-custom'><img src='assets/svg/icon/next-icon.svg'></button>",
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
                    slidesToScroll: 3,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1.2,
                }
            },
        ],
    });

    $('.service-slides').on('afterChange', function (event, slick, currentSlide) {
        if ($(window).width() > 1300) {
            var $slider = $('.service-slides');
            var slickObj = $slider.slick('getSlick');

            // Total number of slides
            var totalSlides = slickObj.slideCount;

            // Number of slides currently displayed
            var totalItemDisplay = slickObj.options.slidesToShow;

            if (currentSlide + totalItemDisplay >= totalSlides) {
                $('.custom-prev').removeClass('d-none');
                $('.custom-next').addClass('d-none');
            } else if (currentSlide + totalItemDisplay < totalSlides &&
                currentSlide > 0
            ) {
                $('.custom-prev').removeClass('d-none');
                $('.custom-next').removeClass('d-none');
            }

            if (currentSlide > 0) {
                $('.custom-prev').removeClass('d-none');
                // $('.custom-next').addClass('d-none');
            } else if (currentSlide == 0) {
                $('.custom-prev').addClass('d-none');
                $('.custom-next').removeClass('d-none');
            }
        } else {
            $('.custom-prev').addClass('d-none');
            $('.custom-next').addClass('d-none');
        }
    });

    if ($(window).width() <= 1300) {
        $('.custom-prev').addClass('d-none');
        $('.custom-next').addClass('d-none');
    }
}
