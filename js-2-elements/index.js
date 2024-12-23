const elements = ["anemo", "geo", "electro", "dendro", "hydro", "pyro", "cryo"];

const correct = [
  ["anemo", "anemo", "pyro", "pyro"],
  ["geo", "electro", "electro", "geo"],
  ["dendro", "hydro", "dendro", "hydro"],
  ["cryo", "cryo", "cryo", "cryo"]
];


const rowslider = document.querySelector("#rows");
const columslider = document.querySelector("#cols");

//in js ()=>{} its the way of defining the arraw function 

const rowsoutput = document.getElementById("rows-output");
const colsoutput = document.getElementById("cols-output");


rowslider.addEventListener("input" ,()=>{
  rowsoutput.textContent =rowslider.value;
})

columslider.addEventListener("input" ,()=>{
  colsoutput.textContent =columslider.value;
})


const generateButton = document.querySelector("#sub");
const table  = document.querySelector("#table_update");


const controller =document.querySelector("#controls")

generateButton.addEventListener("click", () => {
  const rows = parseInt(rowslider.value);
  const cols = parseInt(columslider.value);

  
  table.innerHTML = "";

  // Generate rows and columns
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr"); // Create a row element
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td"); // Create a cell element

      
      cell.setAttribute("data-content", "empty");//so here we are putting the custom choise to represent the condition of cell at that time 

      // Add a click event listener to handle adding anemo.webp
      cell.addEventListener("click", () => {
        const currentContent = cell.getAttribute("data-content");

        if (currentContent === "empty") {
         
          cell.style.backgroundImage = "url('anemo.webp')";
          cell.style.backgroundSize = "cover";
          cell.style.backgroundPosition = "center"; 
          cell.setAttribute("data-content", "anemo"); // Update the state
        }
        else{

          // let nextElement = null; // To store the next element
          // for (let i = 0; i < elements.length; i++) {
          //     if (elements[i] === currentContent) {
          //         // Found the current content; get the next element
          //         nextElement = elements[(i + 1) % elements.length]; // Loop back to the start if at the end
          //         break; // Exit the loop once we find the match
          //     }
          // }
      
          // // Update the cell's background and state
          // cell.style.backgroundImage = `url('${nextElement}.webp')`;
          // cell.setAttribute("data-content", nextElement);


          //so here after reaching the end it will start again 
          const currentIndex = elements.indexOf(currentContent);

          // Check if the current element is the last one in the sequence
          if (currentIndex === elements.length - 1) {
              // If it's the last element, clear the cell
              cell.style.backgroundImage = ""; // Remove background image
              cell.setAttribute("data-content", "empty"); // Set the state back to empty
          } else {
              // Otherwise, move to the next element in the sequence
              const nextIndex = (currentIndex + 1); // Get the next index
              const nextElement = elements[nextIndex];
      
              // Update the cell with the next element
              cell.style.backgroundImage = `url("${nextElement}.webp")`;
              cell.setAttribute("data-content", nextElement);
          }
        }
        if (rows === 4 && cols === 4) {
          // Get the current row and column of the cell
          const rowIndex = i; // From outer loop
          const colIndex = j; // From inner loop
  
          // Compare with the correct matrix
          if (cell.getAttribute("data-content") === correct[rowIndex][colIndex]) {
              cell.classList.add("correct"); // Add correct class
          } else {
              cell.classList.remove("correct"); // Remove correct class
          }
      }
        
      });

      row.appendChild(cell); // Append the cell to the row
    }
    table.appendChild(row); // Append the row to the table
  }

  // Hide the controls div
  controller.style.display = "none";
});
