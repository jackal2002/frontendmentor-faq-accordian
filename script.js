const allPlusIcons = document.querySelectorAll('.plus');
const allMinusIcons = document.querySelectorAll('.minus');
const allAnswers = document.querySelectorAll('.faq-answer');
const allQuestions = document.querySelectorAll('.faq-question');
let opened = false;

allQuestions.forEach((question, index) => {

    question.addEventListener('click', () => {

        if (!question.classList.contains('active')) {
            allQuestions.forEach(question => {
                question.classList.remove('active');
            })
    
            question.classList.add('active');
        } else {
            question.classList.remove('active');
        }
    })
})




