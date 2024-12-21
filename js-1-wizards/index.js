const task1 = document.querySelector("#task1");
const task2 = document.querySelector("#task2");
const task3 = document.querySelector("#task3");
const task4 = document.querySelector("#task4");
const task5 = document.querySelector("#task5");

console.log(wizards);

//a. (1 point) Write to the element with the ID task1 how many wizards in the array are younger than 100 years!

let counter =0;
for (let i =0;i < wizards.length;i++){
    wizard =wizards[i];
    if(wizard.age <100){
        counter++;
    }


}
let counter2 =0;
wizards.forEach(element => {
    if(element.age<100){
        counter2++;
    }
       
});
task1.textContent = counter2;
// task1.innerHTML =counter;

// (2 points) Write to the element with the ID task2 the average age of the wizards


let cnt2=0;
let agesum =0;

for(let i =0;i<wizards.length ;i++){
    wizard =wizards[i];
    agesum  += wizard.age ;
    cnt2++;
    
}
task2.textContent = agesum / cnt2;


//(2 points) Write to the element with the ID task3 the name of the oldest wizard!
let age =0;
let oldestname  = " ";
wizards.forEach(element => {
    if(element.age > age){
        age  =element.age;
        oldestname  =element.name;

    }

    
});
task3.textContent = oldestname;



// d. (2 points) Write to the element with the ID task4 whether the oldest wizard is also the most 
// experienced (the one with the highest XP). (The answer should be either true or false.)


// first lets find the highest xp 

let highestxp = 0 ;
let oldestwizard =0;
let oldestwizardxp =0;
wizards.forEach(element => {
    if(element.xp > highestxp){
        highestxp =element.xp;

    }
    if(element.age > oldestwizard){
        oldestwizard =element.age;
        oldestwizardxp =element.xp;

    }

    
});    

task4.innerHTML =highestxp ==oldestwizardxp;


//(3 points) Write to the element with the ID task5 a list of all spells that contain the substring "Fire",
//  ensuring proper formatting with spaces after each comma.


let spellcheak = [] ;
wizards.forEach(element => {
    len =element.spells.length;
    // let cnt5 =0 ;
    for(let i =0;i <len ;i++){
        if(element.spells[i].includes("Fire")){
            spellcheak.push(element.spells[i]);
        }
    }
    
});
task5.textContent =spellcheak  ;