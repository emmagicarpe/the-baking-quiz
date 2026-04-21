/* EVENT LISTENERS */
// Start the quiz when the user clicks the start button
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', () => startQuiz());

// Go back to landing page when clicking on the logo
const logo = document.getElementById("logo");

if (logo) {
    logo.addEventListener("click", function() {
        hideAllSections();
        document.getElementById('hero').classList.remove('hidden');
        
        questionIndex = 0;
        userChoices = [];
    });
}

// Start the quiz when clicking on "Quiz"
const navQuizLink = document.getElementById("nav-quiz");
if (navQuizLink) {
    navQuizLink.addEventListener("click", function(event) {
        event.preventDefault();
        startQuiz();
    });
}

// Display all the recipes when clicking on "Recipes"
const navRecipesLink = document.getElementById("nav-recipes");

if (navRecipesLink) {
    navRecipesLink.addEventListener("click", function(event) {
        event.preventDefault();
        showAllRecipes();
    });
}

/* FUNCTIONS */

// Keep track of the questions asked and the answers
let questionIndex = 0;
let userChoices = [];

function startQuiz()
{
    questionIndex = 0;
    userChoices = [];

    // Display the questions
    hideAllSections();
    document.getElementById('quiz').classList.remove('hidden');

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
    // Display the result
    hideAllSections();
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
    hideAllSections();
    document.getElementById('recipe-display').classList.remove('hidden');

    // Display the ingredients + the recipe steps
    const displayZone = document.getElementById('recipe-display');
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

function showAllRecipes() {
    hideAllSections();
    document.getElementById('all-recipes').classList.remove('hidden');
    const allRecipesSection = document.getElementById('all-recipes');

    const grid = document.getElementById('recipes-grid');
    // Display the name and picture of each recipe
    grid.innerHTML = desserts.map(dessert => `
        <div class="card">
            <div class="img-container">
                <img src="${dessert.image}" alt="${dessert.name}">
            </div>
            <h3>${dessert.name}</h3>
            <button class="recipe-btn" onclick="showRecipe('${dessert.id}')">See the recipe</button>
        </div>
    `).join('');
}

function hideAllSections() {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
}