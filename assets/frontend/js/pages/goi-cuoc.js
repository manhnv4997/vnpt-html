$(document).ready(function () {
    // handleTab1();
});


function handleTab1() {
    $('.tabs__title--item').on('click', function () {
        const tabParent = $(this).closest('.tabs');

        tabParent.find('.tabs__title--item').removeClass('--active')
        $(this).addClass('--active');
        const targetTab = $(this).attr('target-tab');

        tabParent.find('.tabs__content--main-content').removeClass('--active');
        tabParent.find(`#${targetTab}`).addClass('--active');
    })
}
