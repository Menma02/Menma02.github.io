const questions = [
    {
        question: "What is Auntie's favorite color?",
        choices: ["Purple", "Pink", "Green", "Yellow"],
        answer: "Pink"
    },
    {
        question: "What is Auntie's favorite food?",
        choices: ["Munggo", "Adobong Manok", "Sinigang na Baboy", "Pakbet"],
        answer: "Munggo"
    },
    {
        question: "Where was Auntie born?",
        choices: ["Manila St. Rita Hospital", "Santa Ana Hospital", "Plaridel County Hospital", "Melvery Maternity & General Hospital"],
        answer: "Manila St. Rita Hospital"
    },
    {
        question: "What is Auntie's favorite quote or saying?",
        choices: ["You only live once", "Life is short", "Time is gold", "It is never too late to be what you might have been"],
        answer: "Life is short"
    },
    {
        question: "What was Auntie's first dream in life?",
        choices: ["To become a midwife", "To have a successful business", "To become a Flight attendant", "To have her own house"],
        answer: "To have her own house"
    },
    {
        question: "What was Auntie's first pet?",
        choices: ["Nash(Cat)", "Andeng(Dog)", "Libbys(Cat)", "Kenken(Cat)"],
        answer: "Nash(Cat)"
    },
    {
        question: "Who is Auntie's favorite (Local) male star?",
        choices: ["Gabby Concepcion", "Dingdong Dantes", "Aga Muhlach", "Albert Martinez"],
        answer: "Gabby Concepcion"
    },
    {
        question: "Who is Auntie's favorite (International) male star?",
        choices: ["Leonardo DiCaprio", "Denzel Washington", "Brad Pitt", "Jackie Chan"],
        answer: "Jackie Chan"
    },
    {
        question: "What is Auntie's favorite movie of all time",
        choices: ["Parasite", "Cast Away", "Titanic", " Ratatouille"],
        answer: "Titanic"
    },
    {
        question: "How much is her First receive salary",
        choices: ["₱60,000", "₱75,000", "₱100,000", "₱95,000"],
        answer: "₱100,000"
    },
    {
        question: "What is Auntie's favorite song to sing along to?",
        choices: ["Always remember us this way - Lady Gaga", "I Will Always Love You - Whitney Houston", "Tears in Heaven - Eric Clapton", "Baby One More Time - Britney Spears"],
        answer: "Always remember us this way - Lady Gaga"
    },
    {
        question: "What is Auntie's favorite hobby or pastime?",
        choices: ["Playing games", "Watching movies", "Eating foods", "Make a videos for tiktok or fb reels"],
        answer: "Playing games"
    },
    {
        question: "What is Auntie's favorite movie?",
        choices: ["The BFG", "The Notebook", "Forrest Gump", "Coco"],
        answer: "The Notebook"
    },
    {
        question: "What is Auntie's favorite type of fruit to snack on?",
        choices: ["Cherry", "Grapes", "Mango", "Pineapple"],
        answer: "Cherry"
    },
    {
        question: "What is Auntie's contact number?",
        choices: ["0917-458-8542", "0919-359-7243", "0991-539-7243", "0919-359-7343"],
        answer: "0919-359-7243"
    },    
    {
        question: "How many cats has Auntie had as pets?",
        choices: ["9", "11", "10", "13"],
        answer: "11"
    },
    {
        question: "What is her weight now?",
        choices: ["87", "85", "82", "83"],
        answer: "82"
    },
    {
        question: "What is her waist line now?",
        choices: ["33", "36", "32", "34"],
        answer: "34"
    },
    {
        question: "What food does she dislike or hate the most?",
        choices: ["Dinakdakan", "Dinuguan", "Pinakbet", "Ginisang Ampalaya", "Adobong atay at balunbalunan", "Chicken Curry"],
        answer: "Dinuguan"
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
    const participantName = document.getElementById('participant-name').value;
    if (!participantName) {
        alert("PLEASE ENTER YOUR NAME BEFORE STARTING THE QUIZ.");
        return;
    }

    // Start playing background music
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();

    // Hide instructions and show quiz
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('total-questions').innerText = questions.length;

    // Show first question
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

    let message = "";
    if (score === 0) {
        message = "ANO BAYAN! Parang hindi kamag-anak😢";
    } else if (score >= 1 && score <= 4) {
        message = "Wala kang gift sa pasko, Hays...🤦‍♂️";
    } else if (score >= 5 && score <= 11) {
        message = "Galingan mo next time, Well done!👌";
    } else if (score >= 12 && score <= 19) {
        message = "Galing mo naman, Congratulations!🥳";
    }
    
    document.getElementById('result-message').innerText = message;
}
