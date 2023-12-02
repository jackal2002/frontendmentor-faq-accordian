const allPlusIcons = document.querySelectorAll('.plus');
const allMinusIcons = document.querySelectorAll('.minus');
const allFAQAnswers = document.querySelectorAll('.faq-answer');


allPlusIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        icon.classList.remove('visible');
        icon.previousElementSibling.classList.add('visible');
        allFAQAnswers[index].style.display = 'block';
    })
});

allMinusIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        icon.classList.remove('visible');
        icon.nextElementSibling.classList.add('visible');
        allFAQAnswers[index].style.display = 'none';
    })
});



