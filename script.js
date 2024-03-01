const startbutton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-Container')
const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestion,currentQuestionIndex;
let quizScore=0;


startbutton.addEventListener('click',startGame)
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    setnextQuestion()
})

function startGame(){
    startbutton.classList.add('hide')
    shuffledQuestion=questions.sort(()=>Math.random() -0.5)
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizScore=0
}


function setnextQuestion(){
    resetstate();
    ShowQuestion(shuffledQuestions[currentQuestionIndex])
    
}


function ShowQuestion(question){
    questionElement.innerText=question.question;
    question.Answers.forEach((Answers) =>{
        const button =document.createElement('button')
        button.innerText=Answers.text;
        button.classList.add('btn')

        if(Answers.correct){
            button.dataset.correct =Answers.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)

    })
}


function resetstate(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')

    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)

    }
}


function selectAnswer(e){
    const selectedButton=e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button,button.database.correct)
    })

    if(shuffledQuestion.length>currentQuestionIndex +1){
        nextButton.classList.remove("hide")
    }
    else{
        startbutton.innerText="restart"
        startbutton.classList.remove("hide")
    }

    if(selectedButton.dataset=correct){
        quizScore++
    }

    document.getElementById('right-answers').innerText=quizScore
}


function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct") 
    }
    else{
        element.classList.add("wrong")
    }
}


function clearStatusClass(element){
    element.classlist.romove("Correct")
    element.classlist.romove("Wrong")

}


const questions=[
    {
        question: 'How many tags are in a regular HTML element ?',
        answers: [
            {text: '2', correct: true},
            {text: '3', correct: false},
            {text: '1', correct: false},
            {text: '4', correct: false}
        ],
    },

    {
        question: 'Database management system ____ data ?',
        Answers: [
            {text: 'Delete', correct: false},
            {text: 'Store', correct: false},
            {text: 'Process', correct: false},
            {text: 'Share', correct: true}
        ],
    },
    
    {
        question: 'The Process of performing corrections on the existing data is ?',
        Answers: [
            {text: 'Merging', correct: false},
            {text: 'Editing', correct: true},
            {text: 'Sorting', correct: false},
            {text: 'Filtering', correct: false}
        ],
    },
    
    {
        question: 'Which one of these is a Javascript framework ?',
        Answers: [
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: true},
            {text: 'Eclipse', correct: false}
        ],
    },

    {
        question: 'What part of a database that holds only one type of information ?',
        Answers: [
            {text: 'Report', correct: false},
            {text: 'Field', correct: true},
            {text: 'Record', correct: false},
            {text: 'File', correct: false}
        ],
    },

    {
        question: '"OS" computer abbreviation usually means ?',
        Answers: [
            {text: 'Order of significance', correct: false},
            {text: 'open Software', correct: false},
            {text: 'Optical sensor', correct: false},
            {text: 'Operating System', correct: true}
        ],
    },

    {
        question: 'Which one of these is a Javascript framework ?',
        Answers: [
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: True},
            {text: 'Eclipse', correct: false}
        ],
    },

    {
        question: 'Which of these technologies Support Streaming Videos ?',
        Answers: [
            {text: 'Artificial Intelligence', correct: false},
            {text: 'Augmented reality', correct: false},
            {text: 'Virtual reality', correct: true},
            {text: 'Machine Learning', correct: false}
        ],
    },

    {
        question: 'Which of these technologies help computers to behave like Humans ?',
        Answers: [
            {text: 'XBOX', correct: false},
            {text: 'Artificial Intelligence', correct: true},
            {text: 'Artificial embryo', correct: false},
            {text: '3-D Printing', correct: false}
        ],
    },

    {
        question: 'Which of these tecnologies is a Solution to Shopping ?',
        Answers: [
            {text: 'Touch Commerce', correct: true},
            {text: 'Cognitive technology', correct: false},
            {text: 'Virtual reality', correct: false},
            {text: 'Machine Learning', correct: false}
        ],
    },
]