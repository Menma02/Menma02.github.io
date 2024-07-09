const questions = [
    {
      question: "What is Auntie's favorite color?",
      choices: ["Red", "Blue", "Green", "Yellow"],
      answer: "Blue"
    },
    {
      question: "What is Auntie's favorite food?",
      choices: ["Pizza", "Pasta", "Sushi", "Salad"],
      answer: "Sushi"
    },
    {
      question: "Where was Auntie born?",
      choices: ["New York", "Los Angeles", "Chicago", "Houston"],
      answer: "Chicago"
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;
let participantName = "";

    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none'; // Hide the loading screen
        document.getElementById('quiz-container').style.display = 'block'; // Show quiz container
    }, 5000); // Optional delay before hiding loading screen // Adjust the timeout duration as needed

function startQuiz() {
    participantName = document.getElementById('participant-name').value;
    if (!participantName) {
        alert("Please enter your name before starting the quiz.");
        return;
    }
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('total-questions').innerText = questions.length;
    showQuestion();
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('current-question').innerText = currentQuestionIndex + 1;
    document.getElementById('question').innerText = question.question;
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.onclick = () => checkAnswer(choice);
        choicesContainer.appendChild(button);
    });
}

function checkAnswer(choice) {
    const question = questions[currentQuestionIndex];
    if (choice === question.answer) {
        score++;
    }
    clearInterval(timer);
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        timeLeft = 20;
        document.getElementById('time').innerText = timeLeft;
        document.getElementById('next-button').style.display = 'none';
        showQuestion();
        startTimer();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = `${score} out of ${questions.length}`;
    document.getElementById('participant-name-result').innerText = participantName;
}
