"use strict"

let questionItems = document.querySelectorAll(".item-question");
let questionIcons = document.querySelectorAll(".item-question__icon");
let moreQuestion = document.querySelectorAll(".more-qustions");
let unvisibleQuestionItems = document.querySelectorAll("._mobile__unvisible")

if(questionIcons.length > 0){
    for (let i = 0; i < questionIcons.length; i++) {
        const questionIcon = questionIcons[i];
        questionIcon.addEventListener("click", function(el){
            questionItems[i].classList.toggle("_active");
        });
    }
}
if (moreQuestion.length > 0) {

    moreQuestion[0].addEventListener("click", function(el){
        for (let i = 0; i < unvisibleQuestionItems.length; i++) {
            const unvisibleQuestionItem = unvisibleQuestionItems[i];
            unvisibleQuestionItem.classList.toggle("_mobile__unvisible");
        }
    });
}