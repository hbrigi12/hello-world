// Function to calculate dog years from human years
function dogYears(humanYears) {
    if (humanYears <= 0) {
        return "Please enter a valid age.";
    } else if (humanYears <= 2) {
        return humanYears * 10.5;
    } else {
        return (2 * 10.5) + ((humanYears - 2) * 4);
    }
}

// Test program
function testDogYears() {
    // Hardcoded test values
    let humanYears1 = 1;
    let humanYears2 = 5;
    let humanYears3 = 10;

    console.log("1 human year is " + dogYears(humanYears1) + " dog years.");
    console.log("5 human years are " + dogYears(humanYears2) + " dog years.");
    console.log("10 human years are " + dogYears(humanYears3) + " dog years.");
}

// Call the test function to display results
testDogYears();