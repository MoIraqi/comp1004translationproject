// Variable to store the uploaded JSON data
let translationData;
let funFacts = [ // Array with Fun facts :)
    "The Eiffel Tower was originally intended for Barcelona, Spain, but the project was rejected.",
    "France is the most visited country in the world, with over 82 million tourists annually.",
    "The French language is often called the language of love.",
    "France produces over 400 types of cheese.",
    "Paris, the capital of France, is known as the City of Light.",
    "The Louvre Museum in Paris is the world's largest art museum.",
    "The French Revolution began in 1789, leading to the end of the monarchy in France.",
    "The French national anthem is called La Marseillaise.",
    "The Baguette must follow strict regulations in France to be considered authentic.",
    "The French celebrate 'La Fête Nationale' (Bastille Day) on July 14th.",
    "France is often referred to as 'L'Hexagone' because of its roughly hexagonal shape.",
    "French is the official language of 29 countries worldwide.",
    "France is the largest country in the European Union by land area.",
    "The world's first artificial heart transplant was performed in France in 2013.",
    "The French consume approximately 11 billion baguettes each year.",
    "The word 'salut' (hello) in French is also used to say goodbye.",
    "France has won more Nobel Prizes in Literature than any other country.",
    "The French invented cinema, with the Lumière Brothers screening the first film in 1895.",
    "The Statue of Liberty was a gift from France to the United States in 1886.",
    "The French Alps contain the highest mountain peak in Europe, Mont Blanc.",
    "France has the highest number of UNESCO World Heritage Sites in the world.",
    "The croissant, a popular French pastry, originated in Austria.",
    "The oldest person on record, Jeanne Calment, lived in France and died at 122 years old.",
    "France is the largest country in the EU by land area.",
    "The Tour de France is the world's most famous and prestigious bicycle race.",
    "France is the second-largest agricultural producer in the EU, after Germany.",
    "The French fashion industry is one of the most influential in the world.",
    "France is home to the world's most famous wine regions, including Bordeaux and Champagne.",
    "The French consume the most wine per capita in the world.",
    "The French Revolution abolished the feudal system and established the principles of modern democracy.",
    "French cuisine has been declared a 'world intangible heritage' by UNESCO.",
    "The Palace of Versailles is one of the most visited attractions in France.",
    "France has the highest number of ski resorts in the world.",
    "The Cannes Film Festival is one of the oldest and most prestigious film festivals in the world.",
    "The French kiss, a romantic gesture, is popular worldwide.",
];
// Function to handle loading of the JSON file
function handleFile() {
    const fileInput = document.getElementById('json-input');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        try {
            translationData = JSON.parse(event.target.result);
            console.log('File successfully loaded.');
        } catch (error) {
            console.error('Error parsing file:', error);
        }
    };

    reader.readAsText(file);
}
// Function to translated the word using the uploaded JSON category data
function translateWord() {
    const wordInput = document.getElementById("word-input");
    const translationOutput = document.getElementById("translation-output");

    const word = wordInput.value.trim(); // Trim the input to remove leading or trailing spaces

    if (!translationData) {
        translationOutput.textContent = 'Please load a JSON file first.';
        return;
    }

    // Check if the word exists in the loaded JSON data
    if (translationData[word]) {
        translationOutput.textContent = translationData[word];
    } else {
        translationOutput.textContent = "Translation not found for the word: " + word;
    }
}

// Function to display a random fun fact
function displayRandomFact() {
    const funFactBox = document.getElementById('fun-fact-box');
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactBox.textContent = funFacts[randomIndex];
}

// Display a random fun fact initially
displayRandomFact();

// Update fun fact every 15 seconds
setInterval(displayRandomFact, 15000);

// Function to display a random fun fact
function displayRandomFact() {
    const funFactBox = document.getElementById('fun-fact-box');
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const funFactTitle = '<div class="fun-fact-title">Fun Facts about France!</div>';
    const funFactText = '<div class="fun-fact-text">' + funFacts[randomIndex] + '</div>';
    funFactBox.innerHTML = funFactTitle + funFactText;
}
