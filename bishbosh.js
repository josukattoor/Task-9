document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', runBishBosh);
});
// Get references to the input elements
const rangeInput = document.getElementById("range");
const bishInput = document.getElementById("bish");
const boshInput = document.getElementById("bosh");

// Function to start Bish-Bosh
function startBishBosh() {
    // Get the values from the input fields
    const range = parseInt(rangeInput.value);
    const bish = parseInt(bishInput.value);
    const bosh = parseInt(boshInput.value);

    // Check if any of the input values are negative
    if (range < 0 || bish < 0 || bosh < 0) {
        alert("Please enter positive numbers for the range, Bish, and Bosh.");
    } else {
        // Perform the Bish-Bosh calculations
        // ... (your Bish-Bosh logic here)

        // Display the results in the "output" element
        const outputElement = document.getElementById("output");
        // ... (output your results here)
    }
}

// Add an event listener to the "Start Bish-Bosh" button
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startBishBosh);
function runBishBosh() {
    const range = parseInt(document.getElementById('range').value);
    const bish = parseInt(document.getElementById('bish').value);
    const bosh = parseInt(document.getElementById('bosh').value);

    if (isNaN(range) || isNaN(bish) || isNaN(bosh) || range < 0 || bish < 0 || bosh < 0) {
        alert('Please enter valid numbers and range.');
        return;
    }

    let output = '';
    for (let i = 1; i <= range; i++) {
        if (i % (bish * bosh) === 0) {
            output += 'Bish-Bosh, ';
        } else if (i % bish === 0) {
            output += 'Bish, ';
        } else if (i % bosh === 0) {
            output += 'Bosh, ';
        } else {
            output += i + ', ';
        }
    }

    document.getElementById('output').textContent = output.slice(0, -2); // Remove the last comma and space
}
