
$(document).ready(function () {
    scrolly();


    $('.tu-van').on('click', function () {
        $('.tu-van-box').toggleClass('--show');
    })

    $('.icon-close').on('click', function () {
        if ($('.tu-van-box').hasClass('--show')) {
            $('.tu-van-box').removeClass('--show');
        }
    });
})
