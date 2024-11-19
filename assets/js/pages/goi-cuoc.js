$(document).ready(function () {
    handleTab();
    checkParam();
});

function checkParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug'); // Get the value of the "slug" parameter
    $('.services__item').removeClass('--active');
    $('.list-package__content--main-content').removeClass('--active');
    if (slug) {
        $(`[target-data="${slug}"]`).addClass('--active');
        $(`#${slug}`).addClass('--active');
    } else {
        $($('.services__item')[0]).addClass('--active');
        $($('.list-package__content--main-content')[0]).addClass('--active');
    }
}


function handleTab() {

    $('.services__item').on('click', function () {
        const dataTarget = $(this).attr('target-data');

        $('.services__item').removeClass('--active');
        $(this).addClass('--active');

        $('.list-package__content--main-content').removeClass('--active');

        $(`#${dataTarget}`).addClass('--active');
    })
}
