function createAlphabetGrid() {
    // Define the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-'.split('');
    
    // Select the parent element where the grid will be appended
    const gridContainer = document.querySelector('.alphabet-grid');
    
    // Clear existing content
    gridContainer.innerHTML = '';
    
    // Create and append each letter to the grid
    alphabet.forEach(letter => {
        const letterElement = document.createElement('div');
        letterElement.className = 'alphabet-letter';
        letterElement.textContent = letter;
        gridContainer.appendChild(letterElement);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    createAlphabetGrid();
    const letters = document.querySelectorAll(".alphabet-letter");
    const nameDisplay = document.querySelectorAll(".name-display .letter");
    let currentIndex = 0;

    letters.forEach(letter => {
        letter.addEventListener("click", () => {
            if (currentIndex < nameDisplay.length) {
                nameDisplay[currentIndex].textContent = letter.textContent;
                currentIndex++;
            }
        });
    });
});

