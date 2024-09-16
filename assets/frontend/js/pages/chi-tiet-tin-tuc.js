let currentSize = 0;
const coefficientSize = 4;
const minFontSizeText = 18;
const minFontSizeTitlePC = 40;
const minFontSizeTitleMB = 32;

$(document).ready(function () {

    $('.widget-box').addClass('--show');

    handleMainContent();
    handleScroll();
    handleResize();
    copyUrl();
    handleChangeSize();
    handleCopyContent();
});

function handleCopyContent() {
    $(".btn_copy").click(function () {
        const inputTag = $("<input id='input-copy-content' >");

        const titleText = $('.content .title').text();
        const contentText = $('.main p').text().replace(/\s+/g, ' ').trim();

        const content = `${titleText} \n ${contentText}`;


        $("body").append(inputTag);
        $('#input-copy-content').val(content);
        $('#input-copy-content').select();
        document.execCommand("copy");
        alert("Đã sao chép nội dung");
        inputTag.remove();
    });
}

function handleChangeSize() {
    $('.btn-bigger').on('click', function () {
        if (currentSize < 3) {
            currentSize = currentSize + 1;
        }

        handleChangeSizeContent();
    })
    $('.btn-smaller').on('click', function () {
        if (currentSize > 0) {
            currentSize = currentSize - 1;
        }

        handleChangeSizeContent();
    })

    $('.change-font-size').on('click', function () {
        currentSize = currentSize == 0 ? 1 : 0;
        handleChangeSizeContent();
    });
}

function handleChangeSizeContent() {
    const minFontSizeTitle = window.innerWidth > 992 ? minFontSizeTitlePC : minFontSizeTitleMB;

    $('.main p').css('font-size', `${minFontSizeText + currentSize * coefficientSize}px`)
    $('.content h1').css('font-size', `${minFontSizeTitle + currentSize * coefficientSize}px`)
}

function copyUrl() {
    $('.copy__url__post').click(function () {
        var currentUrl = window.location.href;

        // Create a temporary input element
        var $tempInput = $('<input>');

        // Append the input element to the body
        $('body').append($tempInput);

        // Set the value of the input element to the current URL
        $tempInput.val(currentUrl).select();

        // Copy the value to the clipboard
        document.execCommand('copy');

        // Remove the temporary input element
        $tempInput.remove();

        // Notify the user
        alert('Đã sao chép đường dẫn!');
    });
}

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
