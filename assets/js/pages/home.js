$(document).ready(function () {
    bannerSlides();
    platformSlides();
    handleSuccessProject();
});

function handleSuccessProject() {
    const counter = document.getElementById('number-1');
    const number1 = $('#number-1');
    const number2 = $('#number-2');
    const number3 = $('#number-3');
    const number4 = $('#number-4');
    let hasScrolled = false;

    const updateNumber1 = () => {
        const target = 200000;
        const interval = 5; // thời gian giữa mỗi bước (ms)
        const increment = target / (2000 / interval); // số bước để đạt được giá trị mục tiêu

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            number1.text(Math.floor(current).toLocaleString());
        }, interval);
    };
    const updateNumber2 = () => {
        const target = 63;
        const interval = 5; // thời gian giữa mỗi bước (ms)
        const increment = target / (2000 / interval); // số bước để đạt được giá trị mục tiêu

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            number2.text(Math.floor(current).toLocaleString());
        }, interval);
    };
    const updateNumber3 = () => {
        const target = 12;
        const interval = 5; // thời gian giữa mỗi bước (ms)
        const increment = target / (2000 / interval); // số bước để đạt được giá trị mục tiêu

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            number3.text(Math.floor(current).toLocaleString());
        }, interval);
    };
    const updateNumber4 = () => {
        const target = 16;
        const interval = 5; // thời gian giữa mỗi bước (ms)
        const increment = target / (2000 / interval); // số bước để đạt được giá trị mục tiêu

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            number4.text(Math.floor(current).toLocaleString());
        }, interval);
    };

    window.addEventListener('scroll', () => {
        const rect = counter.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        if (!hasScrolled && rect.top <= windowHeight) {
            hasScrolled = true;

            updateNumber1();
            updateNumber2();
            updateNumber3();
            updateNumber4();
        }
    });
}

function platformSlides() {
    $(".platform-slides").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        infinite: false,
        dots: false,
        arrow: true,
        draggable: true,
        prevArrow: "<button class='custom-prev slides-btn-custom d-none'><img src='assets/svg/icon/prev-icon.svg'></button>",
        nextArrow: "<button class='custom-next slides-btn-custom'><img src='assets/svg/icon/next-icon.svg'></button>",
        responsive: [

            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                }
            }, {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1.3,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1.1,
                }
            },

        ],
    });

    $('.platform-slides').on('afterChange', function (event, slick, currentSlide) {
        if ($(window).width() <= 1500 && $(window).width() >= 992) {
            var $slider = $('.platform-slides');
            var slickObj = $slider.slick('getSlick');

            // Total number of slides
            var totalSlides = slickObj.slideCount;

            // Number of slides currently displayed
            var totalItemDisplay = slickObj.options.slidesToShow;

            if (currentSlide + totalItemDisplay == totalSlides) {
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
            } else if (currentSlide == 0) {
                $('.custom-prev').addClass('d-none');
                $('.custom-next').removeClass('d-none');
            }
        } else {
            $('.custom-prev').addClass('d-none');
            $('.custom-next').addClass('d-none');
        }
    });
}

function bannerSlides() {
    $(".banner-slides").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        infinite: true,
        dots: true,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    dots: false,
                }
            }
        ],
    });


}
