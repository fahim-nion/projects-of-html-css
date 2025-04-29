const questions = [
    {
        question : "ঢাকার কোন মসজিদগুলোতে মোগল স্থাপত্য রীতির সাথে ইউরোপীয় রীতির মিশ্রণ দেখা যায়?",
        answers : [
            {text : "শুধু লালবাগ মসজিদে", correct : false},
            {text : "উনিশ শতকে তৈরি মসজিদগুলোতে", correct : true},
            {text : "শুধু ঢাকেশ্বরী মন্দিরে", correct : false},
            {text : "সব প্রাচীন মন্দিরে", correct : false}
        ]
    },
    {
        question : "ঢাকার মসজিদগুলোর অন্যতম বৈশিষ্ট্য কী?",
        answers : [
            {text : "ছোট আকারের মিনার", correct : false},
            {text : "সাধারণ স্থাপত্য", correct : false},
            {text : "জটিল নকশা ও কারুকাজ", correct : true},
            {text : "আধুনিক নির্মাণশৈলী", correct : false}
        ]
    },
    {
        question : "বেচারাম দেউড়ি মসজিদ কোন শতকের স্থাপত্য?",
        answers : [
            {text : "উনিশ শতক", correct : true},
            {text : "বিশ শতক", correct : false},
            {text : "আঠারো শতক", correct : false},
            {text : "সতেরো শতক", correct : false}
        ]
    },
    {
        question : "রমনার কালীমন্দির প্রথম কখন নির্মিত হয়েছিল?",
        answers : [
            {text : "উনিশ শতক", correct : false},
            {text : "বিশ শতক", correct : false},
            {text : "ঔপনিবেশিক আমলের আগে", correct : true},
            {text : "ঔপনিবেশিক আমলে", correct : false}
        ]
    },
    {
        question : "মুসলিম লীগ কত সালে দ্বি-জাতিতত্ত্বের ভিত্তিতে ভারত বিভক্তির পরিকল্পনা প্রদান করে?",
        answers : [
            {text : "1941", correct : false},
            {text : "1940", correct : true},
            {text : "1939", correct : false},
            {text : "1938", correct : false}
        ]
    }
];

const questionElement = document.getElementById("qstn");
const answerButtons = document.getElementById("ansBtn");
const nextButton = document.getElementById("next-btn");

let currentQuesIdx = 0;
let score = 0;

function startQuiz(){
    currentQuesIdx = 0;
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuesIdx];
    let queNo = currentQuesIdx + 1;
    questionElement.innerHTML = `${queNo}. ${currentQuestion.question}`

    currentQuestion.answers.forEach(answer => {
        const button  = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)
        if(answer.correct == true ){
            button.dataset.correct = answer.correct 
        }
        button.addEventListener("click",selectAns)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAns(e){

    //know which button was clicked
    const selectedBtn = e.target

    //Check was the clicked answer correct? 
    const isCorrect = selectedBtn.dataset.correct === "true"
    //Show immediate feedback to the examinee
    if (isCorrect == true){
        selectedBtn.classList.add("correct")
        score++
        // console.log("yes")
    }else{
        selectedBtn.classList.add("incorrect")
        // console.log("sorrry")
    }

    //Show the real correct answer even if you picked wrong
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct")
            //loop chalaye jeta corret sheta shobuj kore dilam
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}


function showScore(){
    resetState()
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Give Again";
    nextButton.style.display = "block";
}

function handleNextBtn(){
    currentQuesIdx++;
    if(currentQuesIdx < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if (currentQuesIdx < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
});


startQuiz();