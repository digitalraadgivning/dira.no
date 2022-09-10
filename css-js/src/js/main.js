// Styles
import '../scss/main.scss';

// Import asset images
import './images';

// Import javascript
// import debounce from './helpers/debounce';

import siteMenu from './partials/siteMenu';
import loadMore from './partials/loadMore';
import swiperSettings from './partials/swiperSettings';
import faqAccordion from './partials/faqAccordion';

document.addEventListener("DOMContentLoaded", function () {
    siteMenu();
    loadMore();
    swiperSettings();
    faqAccordion();

    window.addEventListener('resize', function () {
        document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
    });
});