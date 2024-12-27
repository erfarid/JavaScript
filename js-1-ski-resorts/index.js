const task1 = document.querySelector("#task1");
const task2 = document.querySelector("#task2");
const task3 = document.querySelector("#task3");
const task4 = document.querySelector("#task4");
const task5 = document.querySelector("#task5");

// Data
console.log(resorts);

// Tasks
// Provide a city that is in Switzerland or France and has ski slopes longer than 200km!
// Find a city in Switzerland or France with more than 200km of ski slopes!

// {
//     city: "Zermatt",
//     country: "Switzerland",
//     lowestPoint: 1620,
//     highestPoint: 3883,
//     skiSlopeLength: 360
//   },



for(let i =0; i< resorts.length;i++) {
    resort =resorts[i];
    city =" ";
    if(resort.country ==="Switzerland" ||resort.country ==="France" && resort.skiSlopeLength >200 ){
        city =resort.city;
        break;

    }

}
task1.innerHTML = city;

// Which cities have summits below 2000m? 
// Find cities with highestpoint  below 2000m.
cityhighest =[] ;
resorts.forEach(element => {
    if(element.highestPoint <2000){
        cityhighest.push(element.city)
    }
    
});
task2.innerHTML =cityhighest;




// Which city has the longest ski slope system? 
// Identify the city with the longest ski slope system.

highestslope = 0 ;
highslopecity = " ";

resorts.forEach(element => {
    if(element.skiSlopeLength > highestslope){
        highestslope =element.skiSlopeLength;
        highslopecity =element.city;


    }
    
});

task3.innerHTML =`${highslopecity} ,${highestslope} km`

// Is it true that all cities have at least 40km of ski slopes? 
// Check if every city has at least 40km of tracks.

cheaker  =true;
resorts.forEach(element => {
    if(element.skiSlopeLength <40 ){
        cheaker=false;

    }
    
});
task4.innerHTML =cheaker;

// For each country, determine how many cities are represented in the list!
// Calculate, for each country, the number of cities represented in the list.
const countrycitycount ={} ;

resorts.forEach(element => {
    if(countrycitycount[element.country]){
        countrycitycount[element.country]++;
    }else{
        countrycitycount[element.country] = 1;
     }

});

const formattedResult = Object.entries(countrycitycount)
    .map(([country, count]) => `(${country}, ${count})`)
    .join(", ");


task5.innerHTML = formattedResult;    