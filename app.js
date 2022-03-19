//transversing the dom method
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });

//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    //foreach method allow us to access all the elements that is present inside the question array, we can access that element by passing that element as the parameter of the function inside foreach.
    console.log(question);
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click",function(){
        questions.forEach(function(item){
            console.log(item);
        });
        question.classList.toggle("show-text");
    })

});