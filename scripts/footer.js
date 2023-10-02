const footer = document.querySelector('.footer__copyright');

const date = new Date();
const currentYear = date.getFullYear() === 2023? '2023': `2023-${date.getFullYear()}`;
footer.innerHTML = currentYear;