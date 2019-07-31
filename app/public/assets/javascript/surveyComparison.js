        
$(document).ready(function() {

    function questionLayout () {

        //for every i (question) create a div containing it, used tilde to be able to use the vartiable inside the newDivA 
        // string to iterate the radio names in order to separate the groups of answers for each question
        //syntax for using variable within string is ${var}
        // to each question div, i appended the text for the answers and prepended a radio button to the text

        for (i=0; i<questions.length; i++){

            var newDivQ = $("<div class = 'questionContainer'>").text(questions[i].Q);
            
            var radioName = ('answer'+[i]);

                var newDivA = $(`<input type='radio' name=radioName${i}  class = 'answerA'>`);
                newDivA.attr('value', questions[i].qAnswers.A);
                var newDivAT = $("<div class='answerContainer'>").text(questions[i].qAnswers.A);
                
                var newDivB = $(`<input type='radio' name=radioName${i}  class = 'answerB'>`);
                newDivB.attr('value', questions[i].qAnswers.B); 
                var newDivBT = $("<div class='answerContainer'>").text(questions[i].qAnswers.B);
            
                var newDivC = $(`<input type='radio' name=radioName${i}  class = 'answerC'>`); 
                newDivC.attr('value', questions[i].qAnswers.C);
                var newDivCT = $("<div class='answerContainer'>").text(questions[i].qAnswers.C);

                var newDivD = $(`<input type='radio' name=radioName${i}  class = 'answerD'>`); 
                newDivD.attr('value', questions[i].qAnswers.D);
                var newDivDT = $("<div class='answerContainer'>").text(questions[i].qAnswers.D);

                var newDivE = $(`<input type='radio' name=radioName${i}  class = 'answerD'>`); 
                newDivE.attr('value', questions[i].qAnswers.E);
                var newDivET = $("<div class='answerContainer'>").text(questions[i].qAnswers.E);
        
                $(newDivQ).append(newDivAT);
                $(newDivAT).prepend(newDivA);
            

                $(newDivQ).append(newDivBT);
                $(newDivBT).prepend(newDivB);

                
                $(newDivQ).append(newDivCT);
                $(newDivCT).prepend(newDivC);

                
                $(newDivQ).append(newDivDT);
                $(newDivDT).prepend(newDivD);

                $(newDivQ).append(newDivET);
                $(newDivET).prepend(newDivE);

                $('#questionsForm').append(newDivQ);

            // ============================================================================================ //
        };
        


};

questionLayout();

$("#userAnswers").on("click", function(event){
    var userInput = $("input[type='radio']:checked");
    var answers = [];
    userInput.push (answers);
    
    if (userInput.length < 10) {
        alert ("Please answer all the questions first!");
    }
    else {

        for (let i = 0; i < userInput.length; i++) {
            // var userInputAnswers = userInput[i].value;
            // var answers = [userInputAnswers].val();
            // var allAnswers = [];
            // if ( i < 10) {
    
            //      allAnswers.push (answers);
            // }
           
            console.log(answers);

            
    
};
    };

});
    
    // 

    // 

    


    // if (userInput.length < 10) {
    //     alert ("Please answer all the questions first!");
    // }
    // else {
    //     for (let i = 0; i < UserInput.length; i++) {
            
    //     var userAnswers = JSON.stringify(userInput[i].value);
    //     console.log (userAnswers);
    //     console.log(userInput);
        // var convertedAnswers = JSON.parse(userAnswers.value);
        // };
   
        // console.log (convertedAnswers);
    // };

 


});
