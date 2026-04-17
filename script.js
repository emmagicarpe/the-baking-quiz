/* EVENT LISTENERS */
// Start the quiz when the user clicks the start button
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', () => startQuiz());

/* FUNCTIONS */

// Keep track of the questions asked and the answers
let questionIndex = 0;
let userChoices = [];

function startQuiz()
{
    questionIndex = 0;
    userChoices = [];

    // Display the questions
    document.getElementById('quiz').classList.remove('hidden');
    
    // Hide all the other sections
    document.getElementById('hero').classList.add('hidden');

    showQuestion();
}

function showQuestion()
{
    // Find current question to ask and display it
    const currentQuestion = questions[questionIndex];
    const questionElement = document.getElementById('question-text');
    questionElement.innerText = currentQuestion.question;

    // Remove previous questions
    const optionsContainer = document.querySelector('.options');
    optionsContainer.innerHTML = "";

    // Add new possible answers
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.answer;
        button.classList.add('option-btn');
        button.addEventListener('click', () => handleOptionClick(option.value));
        optionsContainer.appendChild(button);
    });
}

function handleOptionClick(answer)
{
    // Record the user's answer
    userChoices.push(answer);

    questionIndex++;

    if (questionIndex < questions.length){
        showQuestion();
    }
    else
    {
        // If all the questions have already been asked, show the results
        showResults();
    }
}

function showResults()
{
    document.getElementById('quiz').classList.add('hidden');
}