const questions = document.querySelectorAll(".question");
const question_texts = document.querySelectorAll(".question-text");

question_texts.forEach((qt) => {
    qt.addEventListener("click", (e) => {
        questions.forEach((question) => question.classList.remove("active"));
        e.currentTarget.parentElement.classList.toggle("active");
    });
});