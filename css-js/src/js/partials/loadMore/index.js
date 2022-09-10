export default () => {
    let loadMore = document.querySelector('.js-load-more');

    if (!loadMore)
        return;

    loadMore.addEventListener('click', function () {
        let cards = document.querySelectorAll('.js-card.hidden');

        for (let i = 0; i < 4; i++) {
            if (cards[i]) {
                cards[i].classList.remove('hidden');
            } else {
                loadMore.remove();
            }
        }

        if (cards.length === 4) {
            loadMore.remove();
        }
    });
};