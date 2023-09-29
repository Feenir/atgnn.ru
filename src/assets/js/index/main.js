//-----Анимация на экране сервис-----
let serviceWrapper = document.querySelector('.service__wrapper') // Находим обертку
if (serviceWrapper != null) { // Проверяем на наличие на странице
    let animateServices = document.querySelectorAll('.service__tabs-button')
    let allFadeTabsTabs = document.querySelectorAll('.service__tabs-tab')
    for (let i = 0; i < animateServices.length; i++) { // Проходимся циклом по каждому элементу
        animateServices[i].addEventListener('click', function () {
            let fadeTabs = animateServices[i].querySelector('.service__tabs-pane')
            let fadeTabsTab = animateServices[i].querySelector('.service__tabs-tab') // Находим нужные элементы внутри родителя
            fadeTabs.classList.add('animate__animated', 'animate__fadeInUpBig')
            fadeTabsTab.classList.add('animate__animated')
            allFadeTabsTabs.forEach(function (allFadeTabsTab) { // Удаляем на всех элементах класс
                allFadeTabsTab.classList.remove('animate__fadeInLeft')
            })
            if (!fadeTabsTab.classList.contains('animate__fadeInLeft')) { // даем на нужном элементе класс который удалили выше
                fadeTabsTab.classList.add('animate__fadeInLeft')
            }
        })
    }
}

//-----Открытие мобильного меню-----

/*     Получаем основные элементы              */
const mobileButtonOpen = document.querySelector('[data-open-mobile-menu]')
const mobileMenu = document.querySelector('[data-mobile-menu]')
const mobileCloseMenu = document.querySelector('[data-close-mobile-menu]')
const html = document.getElementsByTagName('html')
const body = document.body

mobileButtonOpen.addEventListener('click', function () { // Задаем обработчик событий  для бургер кнопки в хэдер
    mobileMenu.classList.remove('animate__fadeOutUpBig') // Удаляем класс анимация закрытия (без проверки на наличие этого класса)
    mobileMenu.classList.add('mobile-menu--open', 'animate__animated', 'animate__fadeInRight') // Добавляем классы анимации и проверочный класс на само меню
    mobileMenu.style.display = 'block' // Ставим дисплай блок на мобильное меню
    body.style.overflowY = 'hidden' // Убираем скролл
    html[0].style.overflowY = 'hidden'
})

mobileCloseMenu.addEventListener('click', function () { // Задаем обработчик событий кнопки закрыть
    mobileMenu.classList.remove('mobile-menu--open', 'animate__fadeInRight') //Удаляем классы анимации и проверочный класс на само меню
    mobileMenu.classList.add('animate__fadeOutUpBig') // Добавляем классы анимации на закрытие меню
    setTimeout(function () {
        mobileMenu.style.display = 'none'
        html[0].style.overflowY = 'visible'
    }, 400); // Ставим таймер на добавление display: none, что бы дать свойство после отработки анимации
    body.style.overflowY = 'visible' // Показываем скролл

})

mobileMenu.addEventListener('click', function (e) { // Задаем обработчик событий на всю область мобильного меню
    let popupCallbackBody = mobileMenu.querySelector('.mobile-menu__body') // Находим элемент с основным контентом
    if (mobileMenu.classList.contains('mobile-menu--open')) { //Проверяем открыто ли меню или нет
        if (!popupCallbackBody.contains(e.target)) { //Отслеживаем собитие клика вне основного контента
            mobileMenu.classList.remove('mobile-menu--open', 'animate__fadeInRight')  //Удаляем классы анимации и проверочный класс на само меню
            mobileMenu.classList.add('animate__fadeOutUpBig') // Добавляем классы анимации на закрытие меню
            setTimeout(function () {
                mobileMenu.style.display = 'none'
            }, 400); // Ставим таймер на добавление display: none, что бы дать свойство после отработки анимации
            body.style.overflowY = 'visible' // Показываем скролл
        }
        setTimeout(function () {
            html[0].style.overflowY = 'visible'
        }, 400); // Ставим таймер на добавление display: none, что бы дать свойство после отработки анимации
    }
});


// ==============================================
// Макска телефона без библиотеки
// ==============================================
let eventCallBack = function (e) {
    let el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
    if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([_\d])/g).length) {
            e.target.value = '';
            return;
        }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
}
let phone_inputs = document.querySelectorAll('input[type="tel"]');
for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCallBack);
    }
}

// ==============================================
// Копирования в буфер
// ==============================================
function copyToClipboard(str) {
    let area = document.createElement('textarea');

    document.body.appendChild(area);
    area.value = str;
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
}

let copyButton = document.querySelector('[data-copy-button]')
let copyTarget = document.querySelector('[data-copy-target]')

copyButton.addEventListener('click', function () {
    copyToClipboard(copyTarget.textContent)
    copyButton.textContent = 'Скопировано'
    setTimeout(function () {
        copyButton.textContent = 'Скопировать почту'
    }, 5000)
})

// ===================================================================
// Функция по добавлению классов свайперу в зависимости от размера экрана
// ===================================================================
let swiperActive = document.querySelector('[data-mobile-swiper]')
let stepsSwiper = document.querySelector('[data-steps-swiper]')

function addClassSwiper(breakpointActive, swiperName) {
    breakpointActive = window.matchMedia(breakpointActive);
    let checkerSwiper = function () {
        if (breakpointActive.matches) {
            swiperName.classList.add('swiper')
            swiperName.firstElementChild.classList.add('swiper-wrapper')
            swiperName.firstElementChild.children
            for (let i = 0; i < swiperName.firstElementChild.children.length; i++) {
                swiperName.firstElementChild.children[i].classList.add('swiper-slide')
            }
        } else {
            swiperName.classList.remove('swiper')
            swiperName.firstElementChild.classList.remove('swiper-wrapper')
            swiperName.firstElementChild.children
            for (let i = 0; i < swiperName.firstElementChild.children.length; i++) {
                swiperName.firstElementChild.children[i].classList.remove('swiper-slide')
            }
        }
    };
    breakpointActive.addEventListener('change', checkerSwiper);
    checkerSwiper();

}

// ===================================================================
// Функция по включению выключению свайпера в зависимости от экрана
// ===================================================================
const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);
    const enableSwiper = function (className, settings) {
        swiper = new Swiper(className, settings);

        if (callback) {
            callback(swiper);
        }
    }

    const checker = function () {
        if (breakpoint.matches) {

            return enableSwiper(swiperClass, swiperSettings);
        } else {
            if (swiper !== undefined) swiper.destroy(true, true);
            return false;
        }
    };

    breakpoint.addEventListener('change', checker);
    checker();
}
if (swiperActive) {
    addClassSwiper('(max-width: 991px)', swiperActive)
    resizableSwiper(
        '(max-width: 991px)',
        '[data-mobile-swiper]',
        {
            loop: true,
            slidesPerView: 1,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        },
    );
}
if (stepsSwiper) {
    sliderNumber(certificatesTotal, certificatesCurrent, certificatesSwiper, certificatesWrapper)
    addClassSwiper('(max-width: 991px)', stepsSwiper)
    resizableSwiper(
        '(max-width: 991px)',
        '[data-steps-swiper]',
        {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: "[data-stages-next]",
                prevEl: "[data-stages-prev]",
            },
        },
    );
}


let buttonMore = document.querySelector('[data-more]')
let textShowMore = document.querySelector('[data-show-more]')

if (buttonMore && textShowMore) {
    buttonMore.addEventListener('click', function () {
        let parentTextMore = textShowMore.parentElement
        if (textShowMore.classList.contains('ceo__text-hidden--show')) {
            textShowMore.classList.remove('ceo__text-hidden--show', 'animate__flipInX')
            textShowMore.classList.add('animate__fadeOutUp')
            parentTextMore.classList.remove('ceo__text--show', 'animate__zoomInDown')
        } else {
            textShowMore.classList.remove('animate__fadeOutUp')
            textShowMore.classList.add('ceo__text-hidden--show', 'animate__animated', 'animate__flipInX')
            parentTextMore.classList.add('ceo__text--show')
        }

    })
}

let questionsTriggers = document.querySelectorAll('[data-trigger]')

questionsTriggers.forEach(function (questionsTrigger) {
    questionsTrigger.addEventListener('click', function () {
        let questionsTarget = questionsTrigger.parentNode.querySelector('[data-target]')
        questionsTrigger.classList.toggle('questions__quest--active')
        questionsTarget.classList.toggle('questions__answer-inner--active')
    })
})


let productsTriggers = document.querySelectorAll('[data-products-more]')

productsTriggers.forEach(function (productsTrigger) {
    productsTrigger.addEventListener('click', function (event) {
        let button = event.currentTarget
        let currentList = button.parentNode.nextElementSibling
        currentList.classList.toggle('products__sidebar-list-hidden--show')
    })
})

/*
===================================================
Функции для управления кастомной пагинации
===================================================
*/
function sliderNumber(mySliderTotalSlides, mySliderCurrentSlide, currentSlider, elementDisabled) {

    if (elementDisabled) {
        mySliderCurrentSlide.innerHTML = String(++currentSlider.realIndex)
        --currentSlider.realIndex
        if (currentSlider.params.slidesPerView > 1) {
            mySliderTotalSlides.innerHTML = String(Math.round(++currentSlider.slides.length - currentSlider.params.slidesPerView))
        } else {
            mySliderTotalSlides.innerHTML = String(Math.round(currentSlider.slides.length))
        }

        currentSlider.on('slideChange', function () {
            let currentSlide = ++currentSlider.realIndex
            mySliderCurrentSlide.innerHTML = String(currentSlide)
        })

        if (currentSlider.params.slidesPerView === 1 && currentSlider.params.slidesPerView >= currentSlider.slides.length) {
            elementDisabled.style.display = 'none'
        }

        if (currentSlider.params.slidesPerView > 1 && currentSlider.params.slidesPerView >= --currentSlider.slides.length) {
            elementDisabled.style.display = 'none'
        }
    } else {
        return false
    }
}


/*
===================================================
Выбор цвета
===================================================
*/
function changeColor(colorFakeParent, colorInput) {
    colorFakeParent.style.borderColor = colorInput.value
    colorFakeParent.children[0].style.backgroundColor = colorInput.value
    colorInput.addEventListener('input', function () {
        colorFakeParent.style.borderColor = colorInput.value
        colorFakeParent.children[0].style.backgroundColor = colorInput.value
    })
}

let inputColor = document.querySelector('[data-input-color]')
let fakeColor = document.querySelector('[data-fake-color]')

if (inputColor && fakeColor) {
    changeColor(fakeColor, inputColor)
}

/*
===================================================
Кастомный селект
===================================================
*/

let trueSidebar = document.querySelector('[data-check-select]')

if (trueSidebar) {
    const execution = new ItcCustomSelect('[data-execution]');
    const electric = new ItcCustomSelect('[data-electric]');
}


// ==============================================
// Горизонтальный скролл
// ==============================================

const sectionTabs = document.querySelector('.tabs')


if (sectionTabs) {
    const tableTab = sectionTabs.getElementsByTagName('table')
    for (const table of tableTab) {
        table.setAttribute('data-horizontal', '')
    }
}

const targets = document.querySelectorAll('[data-horizontal]')

if (targets.length > 0) {
    initTargets();
}

function initTargets() {
    for (let index = 0; index < targets.length; index++) {
        const target = targets[index]
        target.addEventListener('wheel', event => {
            const toLeft = event.deltaY < 0 && target.scrollLeft > 0
            const toRight = event.deltaY > 0 && target.scrollLeft < target.scrollWidth - target.clientWidth

            if (toLeft || toRight) {
                event.preventDefault()
                target.scrollLeft += event.deltaY
            }
        })
    }
}


// ==============================================
// Загрузка стороннего материала на сайт
// ==============================================
const placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
const targetsIframe = document.querySelectorAll('[data-src-iframe]')
targetsIframe.forEach(function (target) {
    target.src = placeholder
})

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
}
const loadIframe = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.parentNode.classList.contains('loading')) {
            entry.target.src = entry.target.getAttribute('data-src-iframe')
            entry.target.onload = () => {
                entry.target.parentNode.classList.remove('loading')
                entry.target.removeAttribute('data-src-iframe')
            }
        }
    })
}

const observer = new IntersectionObserver(loadIframe, options)
targetsIframe.forEach(targetIframe => {
    observer.observe(targetIframe)
})


// ==================================================================
// Фильтр по статьям в блоге(Не забыть оставить комменты)
// ==================================================================
const filterButtonsBody = document.querySelector('[data-type-body]')
const filterTargetItems = document.querySelectorAll('[data-filter-target]')
const caseBlogObject = {
    all: 'все',
}
function changeFilter(filterTargetCollection, targetTrigger) {
    filterTargetCollection.forEach(function (filterTargetItem) {
        const filterChange = filterTargetItem.dataset.filterTarget.replace(/\s/g, "").toLowerCase()
        if (filterChange === targetTrigger) {
            filterTargetItem.style.display = 'flex'
        } else {
            filterTargetItem.style.display = 'none'
        }
    })
}
function filter(buttonsBody,targetFilter, caseObject,buttonClass) {
    buttonsBody.addEventListener('click', function (event) {
        let buttonsChildren = buttonsBody.children
        let eventTarget = event.target
        for ( let i = 0; i < buttonsChildren.length; i++) {
            if  (eventTarget.classList.contains(buttonClass)) {
                buttonsChildren[i].classList.remove('active')
                eventTarget.classList.add('active')
                const target = eventTarget.dataset.filterType.replace(/\s/g, "").toLowerCase()
                switch (target) {
                    case caseObject.all:
                        targetFilter.forEach((filterTarget)=> {
                            filterTarget.style.display = 'flex'
                        })
                        break
                    case target:
                        changeFilter(targetFilter, target)
                        break

                }
            }
        }

    })
}

if (filterButtonsBody && filterTargetItems) {
    filter(filterButtonsBody,filterTargetItems,caseBlogObject,'filter__item')
}


// Проверяем, можно ли использовать Webp формат
function canUseWebp() {
    // Создаем элемент canvas
    let elem = document.createElement('canvas');
    // Приводим элемент к булеву типу
    if (!!(elem.getContext && elem.getContext('2d'))) {
        // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    // Иначе Webp не используем
    return false;
}

window.onload = function () {
    // Получаем все элементы с дата-атрибутом data-bg
    let images = document.querySelectorAll('[data-bg]');
    // Проходимся по каждому
    for (let i = 0; i < images.length; i++) {
        // Получаем значение каждого дата-атрибута
        let image = images[i].getAttribute('data-bg');
        // Каждому найденному элементу задаем свойство background-image с изображение формата jpg
        images[i].style.backgroundImage = 'url(' + image + ')';
    }

    // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
    let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

    // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
    if (canUseWebp() || firefoxVer >= 65) {
        // Делаем все то же самое что и для jpg, но уже для изображений формата Webp
        let imagesWebp = document.querySelectorAll('[data-bg-webp]');
        for (let i = 0; i < imagesWebp.length; i++) {
            let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
            imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
        }
    }
};











