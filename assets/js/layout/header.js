$(document).ready(function () {
    handleShowMenuMobile();
    handleShowChildMenuMb();
    handleShowChildMenuPc();

    $('.header__btn-trial').on('click', function () {
        $('.tu-van-box').toggleClass('--show');
    });
});

function handleShowChildMenuPc() {
    $('.header__menu--item').on('click', function () {
        if ($(this).find('.child-menu').length > 0) {
            const childMenu = $($(this).find('.child-menu'));
            const arrowDown = $($(this).find('.arrow-down'));

            if (arrowDown.hasClass('--rotate')) {
                arrowDown.removeClass('--rotate');
                childMenu.removeClass('--active');
                $(this).removeClass('--active')
            } else {
                arrowDown.addClass('--rotate');
                childMenu.addClass('--active');
                $(this).addClass('--active')
            }
        }
    })

    $('.header__menu--item').hover((item) => {
        const currentItem = $(item.currentTarget);
        const childMenu = $(currentItem.find('.child-menu'));
        const arrowDown = $(currentItem.find('.arrow-down'));
        if (arrowDown.hasClass('--rotate')) {
            arrowDown.removeClass('--rotate');
            childMenu.removeClass('--active');
            $(this).removeClass('--active')
        } else {
            arrowDown.addClass('--rotate');
            childMenu.addClass('--active');
            $(this).addClass('--active')
        }

    }, (item) => {
        const currentItem = $(item.currentTarget);
        const childMenu = $(currentItem.find('.child-menu'));
        const arrowDown = $(currentItem.find('.arrow-down'));
        if (arrowDown.hasClass('--rotate')) {
            arrowDown.removeClass('--rotate');
            childMenu.removeClass('--active');
            $(this).removeClass('--active')
        }

    })
}

function handleShowChildMenuMb() {
    $('.menu-mb__item.--has-child').on('click', function () {
        const arrowDown = $(this).find('.arrow-down');
        const childMenu = $(this).find('.child-menu');

        if ($(childMenu).hasClass('--show')) {
            $(arrowDown).removeClass('--rotate');
            $(childMenu).removeClass('--show');
        } else {
            $(arrowDown).addClass('--rotate');
            $(childMenu).addClass('--show');
        }
    });
}

function handleShowMenuMobile() {
    $('.header__icon-box-mb img').on('click', function () {

        if ($(this).hasClass('header__icon-box-mb--menu')) {
            //show menu
            $('.header__icon-box-mb--menu').removeClass('--show');
            $('.header__icon-box-mb--close-menu').addClass('--show');
            $('.menu-mb-box').addClass('--active');
        } else {
            //close menu
            $('.menu-mb-box').removeClass('--active');
            $('.header__icon-box-mb--menu').addClass('--show');
            $('.header__icon-box-mb--close-menu').removeClass('--show');
        }
    });
}

