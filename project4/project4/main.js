
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var num = 0;
var rightornot = new Array();
var questions = [
    ["What is the most spoken language in the world? (Please answer in lower case and one word)"],
    ["What country has the largest population? (Please answer in lower case and one word)"],
    ["Some months of 31 days, others have 30 days. How many have 28 days?(Please answer in numbers only)"],
    ["Name the world's largest ocean. (Please answer in lower case and one word)"],
    ["What is 1+1?", "11", "2", "3"],
    ["Coca Cola was originally colored...", "Black", "Green", "Clear"],
    ["What color are zebras?", "White_with_black_stripes", "Black_with_white_stripes", "Both_of_the_above"],
    ["Oreo cookies have existed longer than chocolate cookies.", "True", "False"],
    ["Which fictional city was the home of Batman?", "Gotham_City", "Philadelphia", "Both_of_the_above"],
    ["What is the capital of Australia?", "Sydney", "Canberra", "Melbourne", "None_of_the_above"],
    ["Adolf Hitler was born in which country?", "Hungary", "France", "Austria", "Germany"],
    ["What is the tallest mountain in the world?", "Mount_Everest", "Mauna_Kea", "Chimborazo", "None_of_the_above"],
    ["Dogs can only see in black and white.", "True", "False"],
    ["What fruits are in the berry family?", "Avocado", "Banana", "Watermelon", "All_of_the_above"],
    ["Who is the current president of the United States", "Barack_Obama", "Donald_Trump", "Abraham_Lincoln", "John_F_Kennedy"],
    ["How long does it take to get to the moon?", "5_days", "3_days", "4_days", "7_days"],
    ["Are penguins loyal to their mate?", "Yes", "No"],
    ["What do penguins use to propose to their girlfriends?", "Flower", "Fish", "Pebble", "Rock"],
    ["What is Temple University's mascot?", "Hooter_the_Owl", "Hooter_the_Panda", "Hooter_the_Lion"],
    ["What do pandas spend most of their time doing?", "Eating", "Playing", "Sleeping"]
];

var answers = [
    ["chinese"],
    ["china"],
    ["12"],
    ["pacific"],
    ["2"],
    ["Green"],
    ["Black_with_white_stripes"],
    ["True"],
    ["Gotham_City"],
    ["Canberra"],
    ["Germany"],
    ["Chimborazo"],
    ["False"],
    ["All_of_the_above"],
    ["Donald_Trump"],
    ["3_days"],
    ["Yes"],
    ["Pebble"],
    ["Hooter_the_Owl"],
    ["Eating"]

];
var userAnswer = [];
//var userAnswers = [];

var checkanswerpos = questions[pos].length;

function _(x) {
    return document.getElementById(x);
}
var options = "";
function renderQuestion() {
    test = _("test");
    //EOF
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        test.innerHTML += "<button Onclick='window.location.reload()'>PLAY AGAIN</button>";
        pos = 0;
        correct = 0;

        for (var t = 0; t < questions.length; t++) {
            question = questions[t][0];
            test.innerHTML += "<h3>" + question + "</h3>";
            test.innerHTML += "<p>your answer: " + userAnswer[t] + "</p>";
            test.innerHTML += "<font color='red'> correct answer:" + answers[t];
            test.innerHTML += " " + rightornot[t] + "</font>";
        }
        return false;
    }
    //show questions
    _("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    test.innerHTML = "<h3>" + question + "</h3>";
  
    //textbox questions
    if (questions[pos].length == 1) {
        test.innerHTML += '<input type="text" name="choices" />';
    }
    //radio button questions
    else if (pos < 15) {

        num = 1;
      
        for (var i = 1; i < questions[pos].length; i++) {

            choices = questions[pos][i];

            test.innerHTML += "<input type='radio' name='choices' value=" + choices + "> " + choices + "<br>";
        }
    }
        //drop down list questions
    else {

        test.innerHTML += "<select id='opt'></select>";
        for (var i = 1; i < questions[pos].length; i++) {
            num = 2;

            choices = questions[pos][i];

            _("opt").innerHTML += "<option name='choices' value=" + choices + "> " + choices + " </option>";
        }
    }
   
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

//check answer
function checkAnswer() {
    choices = document.getElementsByName("choices");
    choice = "";
    if (num == 0) {
        for (var i = 0; i < choices.length; i++) {
            choice = choices[i].value;
        }
    }
    else if (num == 1) {
        for (var i = 0; i < choices.length; i++) {
            if (choices[i].checked) {
                choice = choices[i].value;
            }
        }
        if (choice == "") {
            alert("Please answer the question.");
            return;
        }
    }
    else if (num == 2) {
        for (var i = 0; i < choices.length; i++) {
            if (choices[i].selected) {
                choice = choices[i].value;
            }
        }
        if (choice == "") {
            alert("Please answer the question.");
            return;
        }
    }

    if (choice === "") {
        alert("Please answer the question.");
        return;
    }

    if (choice == answers[pos]) {
        correct++;
        alert("Correct");
        rightornot[pos] = " + 1 point";
        
    }
    else {
        alert("Incorrect");
        rightornot[pos] = " 0 points";
    }
    
    userAnswer.push(choice);
    pos++;
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);