$(document).ready(function () {

    $('.widget-box').addClass('--show');

    handleMainContent();
    handleScroll();
    handleResize();
});

function handleMainContent() {

    $('.main p').each((index) => {
        const item = $('.main p')[index];
        if ($(item).find('img').length > 0) {
            $(item).css('padding', '0')
        }
    });
}

function handleResize() {
    let screenWidth = $(window).width();
    $(window).on('resize', function () {
        screenWidth = $(window).width();
        handleScroll(screenWidth);
    })
    handleScroll(screenWidth);
}

function handleScroll(screenWidth) {
    const headerHeight = $('.header').height();
    handleShowSubMenu(headerHeight, screenWidth);
    $(window).on('scroll', function () {
        handleShowSubMenu(headerHeight, screenWidth);
    })
}

function handleShowSubMenu(headerHeight, screenWidth) {
    let scrollPosition = $(window).scrollTop();

    if (scrollPosition >= headerHeight && screenWidth <= 992 && screenWidth) {
        $('.sub-menu-news-detail').addClass('--show');
        $('header').addClass('--hidden')

    } else {
        $('.sub-menu-news-detail').removeClass('--show');
        $('header').removeClass('--hidden')
    }

    if (!screenWidth) {
        handleShowWidgetBox(scrollPosition);
    }
}

function handleShowWidgetBox(scrollPosition) {
    const contentHeight = $('.block__content--main-content .content').height();
    const positionStartContent = $('.block__content--main-content .content').offset().top;
    const widgetBoxHeight = $('.widget-box').height();
    const positionEndContent = contentHeight + positionStartContent + widgetBoxHeight;
    const positionBottomWindow = scrollPosition + $(window).height();

    if (positionBottomWindow >= positionEndContent) {
        $('.widget-box').removeClass('--show');
    } else {
        $('.widget-box').addClass('--show');
    }
}
