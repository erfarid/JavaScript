const form = document.querySelector("form");
const divContainer = document.querySelector(".container");

// a. (2 pts) Calculate last year's total energy consumption (M) and output it to the console.
// Select all input fields of type range
const inputs = document.querySelectorAll("input[type='range']");

function calculateTotalConsumption() {
    let total = 0;
    for (let i = 0; i < inputs.length; i++) {
        const consumption = Number(inputs[i].getAttribute("data-consumption"));
        total += consumption;
    }
    return total;
}

// b. (2 pts) Calculate the current consumption (ci) for each input and log the values to the console.
function calculateCurrentConsumptions() {
    let currentConsumptions = [];
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const value = Number(input.value);
        const max = Number(input.max);
        const consumption = Number(input.getAttribute("data-consumption"));

        // Calculate ci for the current slider
        const ci = (value / max) * consumption;

        // Add ci to the array
        currentConsumptions.push(ci.toFixed(0));
    }
    console.log("Current consumption values (ci):", currentConsumptions);
    return currentConsumptions;
}

// c. (2 pts) Update the label widths based on ci / M * 100%
function updateLabelWidths(totalEnergyConsumption, currentConsumptions) {
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const ci = currentConsumptions[i];

        // Calculate width percentage relative to total consumption (M)
        const widthPercentage = (ci / totalEnergyConsumption) * 100;

        // Find the corresponding label using the 'for' attribute
        const label = document.querySelector(`label[for="${input.id}"]`);

        // Update the CSS variable for label width
        if (label) {
            label.style.width = `${widthPercentage}%`;
        }
    }
}

// d. (2 pts) Refresh the chart when the value of any input field is changed (event type: input).
function updateChart() {
    
    const totalEnergyConsumption = calculateTotalConsumption();
    console.log(`Total energy consumption (M): ${totalEnergyConsumption}`);

    
    const currentConsumptions = calculateCurrentConsumptions();
    updateLabelWidths(totalEnergyConsumption, currentConsumptions);
}

form.addEventListener("input", updateChart);
updateChart();
