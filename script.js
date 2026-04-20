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
    document.getElementById('results').classList.add('hidden');
    document.getElementById('recipe-display').classList.add('hidden');

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
    // Hide previous section and display the result
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');

    const results = calculateScores();
    const dessert = findWinnerDessert(results);

    // Display the winning pastry
    const resultTitle = document.getElementById('result-title');    
    resultTitle.innerText = dessert.name;
    
    const resultImage = document.getElementById('result-img');    
    resultImage.src = dessert.image;
    resultImage.alt = dessert.name;

    // Calculate matching percentage
    const resultMatch = document.getElementById('result-match');    
    const percentage = dessert.finalScore / questions.length *100;
    resultMatch.innerText = "Correspondance: " + percentage + "%";

    // Button to display the recipe
    const resultRecipeButton = document.getElementById('recipe-btn');
    resultRecipeButton.onclick = () => showRecipe(dessert.id);
}

function calculateScores()
{
    // Count the matching tags for each pastry
    const results = desserts.map(dessert => {
        let score = 0;
        userChoices.forEach(choice => {
            if (dessert.tags.includes(choice)) {
                score++;
            }
        });
        return { ...dessert, finalScore: score };
    });

    return results;
}

function findWinnerDessert(results)
{
    // Sort all pastries by their score
    results.sort((a, b) => b.finalScore - a.finalScore);

    // Winner has the highest score
    const winner = results[0];

    return winner;
}

function showRecipe(dessertId) {
    const selectedDessert = desserts.find(d => d.id === dessertId);

    // Display the recipe section
    document.getElementById('results').classList.add('hidden');
    const displayZone = document.getElementById('recipe-display'); 
    displayZone.classList.remove('hidden');

    // Display the ingredients + the recipe steps
    displayZone.innerHTML = `
        <div class="recipe-container">
            <h2>${selectedDessert.name}</h2>
            <img src="${selectedDessert.image}" alt="${selectedDessert.name}" style="width:100%; max-width:300px; border-radius:15px;">
            
            <h3>Ingrédients</h3>
            <ul>${selectedDessert.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>

            <h3>Préparation</h3>
            <ol>${selectedDessert.recipe.map(step => `<li>${step}</li>`).join('')}</ol>

            <button onclick="startQuiz()" class="start-again-btn">Start again</button>
        </div>
    `;
}