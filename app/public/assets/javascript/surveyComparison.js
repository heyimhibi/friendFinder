$("#userAnswers").on("click", function(event){
    var userInput = $("input[type='radio']:checked");
    
    

    if (userInput.length < 10) {
        alert ("Please answer all the questions first!");
    }
    else {
        var correctAnswers = 0;

        for (let j = 0; j < friends.length; j++) {
            console.log(questions[j].correctA, userInput[j].value);

            if (questions[j].correctA === userInput[j].value) {
                correctAnswers++;
            }

        }

        console.log(correctAnswers);

    }

    }); 