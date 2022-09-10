export default () => {
    let _body = document.body;
    let new_scroll_position = 0;
    let last_scroll_position;
    let initScrolled = false;
    let toggleMenuButtons = document.querySelectorAll('.js-menu-toggle, .js-main-menu a:not([data-disabled])');
    let prevent = false;

    if (window.pageYOffset >= 50) {
        _body.classList.add('fixed-nav', 'scrolled');
    }

    window.addEventListener('scroll', function () {

        if (!initScrolled) {
            initScrolled = !initScrolled;
        } else {
            last_scroll_position = window.pageYOffset;

            if (new_scroll_position < last_scroll_position && last_scroll_position > 100) {
                _body.classList.remove('slideDown');
                _body.classList.add('slideUp');
            } else if (new_scroll_position > last_scroll_position) {
                if (_body.classList.contains('slideUp')) {
                    _body.classList.remove('slideUp');
                }
                _body.classList.add('slideDown');
            }

            new_scroll_position = last_scroll_position;

            if (window.pageYOffset >= 50) {
                _body.classList.add('fixed-nav', 'scrolled');
            } else {
                _body.classList.remove('fixed-nav');
            }
        }
    });

    Array.prototype.forEach.call(toggleMenuButtons, function (item, index) {
        item.addEventListener('click', () => {
            if (!prevent) {
                prevent = true;
                document.body.classList.toggle('menu-show');

                setTimeout(() => {
                    prevent = false;
                }, 600);
            }
        });
    });
};