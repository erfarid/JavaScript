// Variables to keep track of treasure location and click counter
let treasureLocation = {};
let clickCount = 0;
let boardSize = 2;

// Attach event listener to the "Generate Board" button
document.getElementById('generateBoardBtn').addEventListener('click', generateBoard);

// Function to generate a new game board based on input size
function generateBoard() {
    const sizeInput = document.getElementById('boardSize').value;

    // Use if-else instead of ternary operator
    if (sizeInput) {
        boardSize = parseInt(sizeInput);
    } else {
        boardSize = 2;
    }

    const boardContainer = document.getElementById('boardContainer');
    boardContainer.innerHTML = ''; // Clear previous board
    
    const table = document.createElement('table');
    
    // Generate treasure position randomly
    treasureLocation.row = Math.floor(Math.random() * boardSize);
    treasureLocation.col = Math.floor(Math.random() * boardSize);
    
    for (let i = 0; i < boardSize; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('td');
            cell.textContent = ' ';
            cell.style.border = '1px solid black';
            cell.style.width = '50px';
            cell.style.height = '50px';
            cell.style.textAlign = 'center';
            cell.addEventListener('click', () => handleCellClick(i, j, cell));
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    boardContainer.appendChild(table);
    
    clickCount = 0; // Reset the counter for new game
    updateClickCounter();
}

// Function to handle cell clicks
function handleCellClick(row, col, cell) {
    clickCount++;
    updateClickCounter();
    
    if (row === treasureLocation.row && col === treasureLocation.col) {
        cell.style.backgroundColor = 'gold';
        alert('Congratulations! You found the treasure!');
        
        setTimeout(() => {
            generateBoard(); // Hide the treasure and generate a new board
        }, 1000);
    } else {
        cell.style.backgroundColor = 'lightgray';
    }
}

// Function to update the click counter display
function updateClickCounter() {
    document.getElementById('clickCounter').textContent = clickCount;
}

// Generate initial 2x2 board on load
window.onload = generateBoard;
