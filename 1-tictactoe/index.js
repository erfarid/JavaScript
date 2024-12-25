const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');

const game = [
  "XXOO",
  "O OX",
  "OOO ",
];


//task1

// a. (2 pts) Output whether all rows have the same length to the element with ID task1
// . (Does the length of each row match the length of the first row?)
len =game[0].length
ch =true;
game.forEach(element => {
  
  if(element.length!==len){
    ch =false;
    

  }
  
  
});
task1.innerText = ch;


// b. (2 pts) Output whether the first row only contains X and O characters to the element with ID task2.


len2 =game[0];
ch2 =true;
for(let i =0;i< len2.length ;i++){
  if (len2[i] !='X' &&  len2[i] !='O'){
    ch2=false;
    break;
  }
}
task2.innerText =ch2;

//c. (2 pts) Output the number of X and O characters to the element with ID task3.

// Initialize counters for 'X' and 'O'
let numX = 0;
let numO = 0;

// Iterate through each row of the game board
game.forEach(row => {
  for (let char of row) { // Use a `for...of` loop to iterate through each character
    if (char === 'X') {
      numX++;
    } else if (char === 'O') {
      numO++;
    }
  }
});

// Output the result as an object-like string
task3.innerText = `X/O = ${numX}/${numO}`;

// always write it in the `` for dynamic string 
index4 =-1;
for(let i=0;i<game.length ;i++){
  cheak4 =game[i];
  
  if(cheak4.includes('XXX') || cheak4.includes('OOO') ){
    index4 = i;
    break;

  }

}
task4.innerText =index4;
  

