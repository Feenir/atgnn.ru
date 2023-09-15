const blogSwiper = new Swiper("[data-blog-swiper]", {
    slidesPerView: 'auto',
    slidesOffsetAfter: 40,
    spaceBetween: 20,
    breakpoint: {
        320: {
            spaceBetween: 10,
            slidesOffsetAfter: 320,
        },

        768: {
            spaceBetween: 15,
        },
    },
    navigation: {
        nextEl: "[data-blog-next]",
        prevEl: "[data-blog-prev]",
    },
});

const heroSwiper = new Swiper("[data-hero-swiper]", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    allowTouchMove: false,
    effect: "flip",
    grabCursor: true,
});

const progressCircle = document.querySelector("[data-image-autoplay] svg");
const heroSwiperImage = new Swiper("[data-hero-image-swiper]", {
    slidesPerView: 1,
    breakpoint: {
        320: {
            slidesPerView: 'auto',
        },
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false
    },
    thumbs: {
        swiper: heroSwiper,
    },
    navigation: {
        nextEl: "[data-image-next]",
        prevEl: "[data-image-prev]"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 + progress);
        }
    }
});

const heroCatalogProgressCircle = document.querySelector("[data-hero-catalog-autoplay] svg");
const heroCatalog = new Swiper("[data-hero-catalog]", {
    slidesPerView: 1,
    grabCursor: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            heroCatalogProgressCircle.style.setProperty("--progress", 1 + progress);
        }
    },
    navigation: {
        nextEl: "[data-hero-catalog-next]",
        prevEl: "[data-hero-catalog-prev]"
    },
});

const cardSwiper = new Swiper("[data-card-swiper]", {
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        370: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2.8,
            spaceBetween: 15,
        },
        1340: {
            slidesPerView: 3.6,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: "[data-card-next]",
        prevEl: "[data-card-prev]",
    },

});


const controlWrapper = document.querySelector('[data-card-control]')
const cardTotal = document.querySelector('[data-card-total]')
const cardCurrent = document.querySelector('[data-card-current]')
sliderNumber(cardTotal, cardCurrent, cardSwiper, controlWrapper)


const swiperThumb = new Swiper("[data-swiper-thumb]", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
const swiperBig = new Swiper("[data-swiper-big]", {
    spaceBetween: 10,
    navigation: {
        nextEl: "[data-big-next]",
        prevEl: "[data-big-prev]",
    },
    thumbs: {
        swiper: swiperThumb,
    },
});

const certificatesSwiper = new Swiper("[data-tabs-certificates]", {
    slidesOffsetAfter: 15,
    navigation: {
        nextEl: "[data-certificates-next]",
        prevEl: "[data-certificates-prev]",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        560: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1180: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    }
});

const certificatesWrapper = document.querySelector('[data-certificates-control]')
const certificatesTotal = document.querySelector('[data-certificates-total]')
const certificatesCurrent = document.querySelector('[data-certificates-current]')

sliderNumber(certificatesTotal, certificatesCurrent, certificatesSwiper, certificatesWrapper)

const photoVideoSwiper = new Swiper("[data-tabs-photo]", {
    navigation: {
        nextEl: "[data-photo-next]",
        prevEl: "[data-photo-prev]",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        360: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        560: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});

const photoVideoWrapper = document.querySelector('[data-photo-control]')
const photoVideoTotal = document.querySelector('[data-photo-total]')
const photoVideoCurrent = document.querySelector('[data-photo-current]')

sliderNumber(photoVideoTotal, photoVideoCurrent, photoVideoSwiper, photoVideoWrapper)

const swiperPopular = new Swiper("[data-popular-swiper]", {
    spaceBetween: 10,
    navigation: {
        nextEl: "[data-popular-next]",
        prevEl: "[data-popular-prev]",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    }
});


