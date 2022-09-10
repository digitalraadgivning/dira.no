export default () => {
    let faq = document.querySelectorAll('.js-faq-answer');

    faq.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}