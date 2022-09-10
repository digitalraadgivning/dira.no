// Slick carousel settings across entire site
import Swiper from 'swiper';

export default () => {
    (() => {
        let swiper = new Swiper('.js-related-swiper', {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 20,
        });
    })();

    (() => {
        let swiper = new Swiper('.js-status-bar', {
            slidesPerView: "auto",
            freeMode: true,
        });
    })();

    (() => {
        let swiper = new Swiper('.js-kunder-related-swiper', {
            observer: true,
            runCallbacksOnInit: true,
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 20,
        });

        let kunderFilters = document.querySelectorAll('.js-kunder-filters');

        if (!kunderFilters.length)
            return;

        kunderFilters.forEach(item => {

            item.addEventListener('click', () => {
                let filter = item.dataset.filter;

                swiper.slides.forEach(slide => {
                    slide.style.display = 'none';
                });

                swiper.slides.forEach(slide => {
                    if (!filter || slide.classList.contains(filter)) {
                        slide.style.display = 'block';
                    }
                });

                kunderFilters.forEach(i => {
                    i.classList.remove('active');
                });

                item.classList.add('active');

                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                swiper.slideTo(0);
                swiper.slides[0].classList.add('swiper-active');
            });

            if (item.classList.contains('active')) {
                item.click();
            }
        });
    })();
};