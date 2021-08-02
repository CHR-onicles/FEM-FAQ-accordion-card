const questions = document.querySelectorAll(".question");
const question_texts = document.querySelectorAll(".question-text");

question_texts.forEach((qt) => {
    qt.addEventListener("click", (e) => {
        item = e.currentTarget.parentElement;
        item.classList.toggle("active");
        questions.forEach((question) => {
            if (question !== item) question.classList.remove("active");
        });
    });
});