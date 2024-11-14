$(document).ready(function () {
    handleTab();
});


function handleTab() {
    $('.services__item').on('click', function () {
        const dataTarget = $(this).attr('target-data');

        $('.services__item').removeClass('--active');
        $(this).addClass('--active');

        console.log(dataTarget, 'dataTarget');

        $('.list-package__content--main-content').removeClass('--active');

        $(`#${dataTarget}`).addClass('--active');
    })
}
