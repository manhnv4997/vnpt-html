
let intervalId;

$(document).ready(function () {
    handleSlides();
    handleSlidesBottom()
    // handleClickTabTitle();
    // checkParamUrlAndActiveTab();
    // handleActiveTabWhenChangeParamUrl();
    // handleClickTitleCategory();
});

function handleClickTitleCategory() {
    $('.title-box__category').on('click', function (e) {
        e.preventDefault();
        const newUrlFragment = $(this).attr('href');
        history.pushState(null, null, newUrlFragment);
        const targetTab = newUrlFragment.substring(1);

        $('html, body').animate({ scrollTop: 0 }, 500, function () {
            setTimeout(() => {
                handleActiveTab(targetTab);
            }, 500);
        });
    })
}

function handleActiveTabWhenChangeParamUrl() {
    $(window).on('hashchange', function () {
        checkParamUrlAndActiveTab();
    });
}

function checkParamUrlAndActiveTab() {
    const fragment = window.location.hash;
    let targetTab = fragment.substring(1) ? fragment.substring(1) : 'all';
    handleActiveTab(targetTab);
}

function handleSlidesBottom() {
    handleSlidesBottom1();
}

function handleSlides() {
    $('.tabs__content--main-content').each((index) => {
        const item = $('.tabs__content--main-content')[index];
        const itemId = $(item).attr('id');

        handleSingleSlides(itemId);
    })
}

function handleSingleSlides(itemId) {
    const totalItemSlides = $(`#${itemId} .slides .slides__item`).length;
    $(`#slides-total-item-${itemId}`).text(totalItemSlides < 10 ? `0${totalItemSlides}` : totalItemSlides);

    $(document).on('click', `#action-slides__prev-${itemId}`, function () {
        handlePrevSlides(itemId);

        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setIntervalSlidesBlog(itemId);

    })

    $(document).on('click', `#action-slides__next-${itemId}`, function () {
        handleNextSlides(itemId);

        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setIntervalSlidesBlog(itemId);

    })
}

function setIntervalSlidesBlog(tabId) {
    return setInterval(() => {
        handleNextSlides(tabId);

    }, 5000);
}

function updateSlidesValue(currentIndexSlides, tabId) {
    const value = currentIndexSlides < 10 ? `0${currentIndexSlides}` : currentIndexSlides;

    $(`#slides-current-${tabId}`).text(value);
}

function handleNextSlides(tabId) {
    let nextItem = null;
    let index = 0;
    const listSlidesItem = $(`#${tabId} .slides .slides__item`);
    for (const itemBox of $(`#${tabId} .slides .slides__item`)) {
        const classItemBox = $(itemBox).attr('class');

        if (classItemBox.includes('--active')) {
            const nextIndex = index >= $(`#${tabId} .slides .slides__item`).length - 1 ? 0 : index + 1;
            nextItem = listSlidesItem[nextIndex];
            updateSlidesValue(nextIndex + 1, tabId);

            $(itemBox).removeClass('--active');
        }

        index++;
    }

    $(nextItem).addClass('--active');
}

function handlePrevSlides(tabId) {
    let prevItem = null;
    let index = 0;
    const listSlidesItem = $(`#${tabId} .slides .slides__item`);
    for (const itemBox of $(`#${tabId} .slides .slides__item`)) {
        const classItemBox = $(itemBox).attr('class');

        if (classItemBox.includes('--active')) {
            const prevIndex = index <= 0 ? $(`#${tabId} .slides .slides__item`).length - 1 : index - 1;
            prevItem = listSlidesItem[prevIndex];
            updateSlidesValue(prevIndex + 1, tabId);
            $(itemBox).removeClass('--active');
        }
        index++;
    }

    $(prevItem).addClass('--active');
}


function handleClickTabTitle() {
    $('.tabs__title--item').on('click', function () {
        const targetTab = $(this).attr('target-tab');
        // handleActiveTab(targetTab);
    })

    intervalId = setIntervalSlidesBlog(1);
}


function handleActiveTab(targetTab) {

    const tabTargetContent = $(`#${targetTab}`);

    const tabParent = tabTargetContent.closest('.tabs');
    const index = tabTargetContent.index() + 1;

    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setIntervalSlidesBlog(index);

    tabParent.find('.tabs__content--main-content').removeClass('--active');
    tabParent.find(`#${targetTab}`).addClass('--active');
    tabParent.find('.tabs__title--item').removeClass('--active');
    tabParent.find(`[target-tab=${targetTab}]`).addClass('--active');
}

function handleSlidesBottom1() {
    $(".slides-tab-1").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: false,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });
}
