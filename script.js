const questions = {
    'present-simple': [
        {
            q: "She ____ to school every day.",
            choices: ["go", "goes", "going"],
            answer: "goes"
        },
        {
            q: "I ____ coffee every morning.",
            choices: ["drink", "drinks", "drinking"],
            answer: "drink"
        },
        // Add 3 more questions
    ],
    'past-simple': [
        {
            q: "I ____ to the park yesterday.",
            choices: ["go", "went", "gone"],
            answer: "went"
        },
        {
            q: "They ____ their homework last night.",
            choices: ["do", "did", "done"],
            answer: "did"
        },
        // Add 3 more questions
    ],
    // Add more tenses...
};

let currentQuestionIndex = 0;
let selectedTense = '';
let currentQuestions = [];

function showLoadingScreen() {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("tense-selection").style.display = "block";
    }, 2000);
}

function startQuiz(tense) {
    selectedTense = tense;
    currentQuestions = questions[tense];
    currentQuestionIndex = 0;

    document.getElementById("tense-selection").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById("quiz-title").innerText = `${selectedTense.replace('-', ' ')} Quiz`;
    document.getElementById("question").innerText = question.q;
    
    const answersHTML = question.choices.map(choice => {
        return `<button onclick="checkAnswer('${choice}')">${choice}</button>`;
    }).join("");
    document.getElementById("answers").innerHTML = answersHTML;
}

function checkAnswer(selected) {
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;
    if (selected === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        alert("You've completed the quiz!");
        // Optionally, redirect or show final score
    }
}

window.onload = showLoadingScreen;
