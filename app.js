const cardFooter = document.querySelector('.card__footer');
const authorInfo = document.querySelector('.card__author');
const socialMedia = document.querySelector('.card__social-links');

const socialBtn = document.querySelector('.social-links');

socialBtn.addEventListener('click', () => {
    cardFooter.classList.toggle('card__footer-active')
    authorInfo.classList.toggle('disabled')
    socialMedia.classList.toggle('disabled')
    socialBtn.classList.toggle('social-links-active')
})
