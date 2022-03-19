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
            if(item !== question){
                // item here is a array of already selected or clicked article.
                // question is the newly selected or clicked article.
                // if both doesnt match with each other, here in this case if we have already clicked the second button then 
                // in the item array we will see show-text class added to its second item.
                // if we now at present click on the first item of the question array then it will add show-text class to the first item.
                // now when we compare two array we will see that two pair of article will not match with each other first and the second one 
                // for the first one, in the item part or already clicked array part there is no show-text class, hence it wont get affected.
                // while for the second part, in the item part, there is a show-text class, hence it will get affected or removed!
                // this is will be continued for any two consecutive clicks for one when clicked the other will get removed.
              item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    })

});