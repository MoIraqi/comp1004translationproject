let translationData;

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

function translateWord() {
    const wordInput = document.getElementById("word-input");
    const translationOutput = document.getElementById("translation-output");

    const word = wordInput.value.trim(); // Trim the input to remove leading/trailing spaces

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
