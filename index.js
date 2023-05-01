// Get the input and max value text boxes
const inputTextBox = document.getElementById("input-value");
const maxValueTextBox = document.getElementById("max-value");

// Get the graph elements
const verticalBar = document.querySelector(".vertical-bar");
const gradientBar = document.querySelector(".gradient-bar");
const pieChart = document.querySelector(".pie-chart");

// Add an event listener to the input text box to update the graphs
inputTextBox.addEventListener("input", () => {
    // Parse the input and max values as numbers
    const inputValue = parseFloat(inputTextBox.value);
    const maxValue = parseFloat(maxValueTextBox.value);

    // Check if the input value is greater than the max value
    if (inputValue > maxValue) {
        alert("Input value cannot be greater than max value!");
        inputTextBox.value = maxValueTextBox.value;
        return;
    }

    // Calculate the percentages for the graphs
    const inputPercentage = (inputValue / maxValue) * 100;
    const maxPercentage = 100;

    // Update the vertical bar graph
    verticalBar.style.height = `${inputPercentage}%`;

    // Update the gradient bar graph
    gradientBar.style.background = `linear-gradient(to top, #4caf50 ${inputPercentage}%, #e0e0e0 ${inputPercentage}%)`;

    // Update the pie chart
    const halfCircle = pieChart.querySelector(".half-circle");
    const percentage = pieChart.querySelector(".percentage");
    const percentageValue = Math.round(inputPercentage);
    const rotationDegrees = percentageValue * 1.8;
    halfCircle.style.transform = `rotate(${rotationDegrees}deg)`;
    percentage.textContent = `${percentageValue}%`;
});

// Add an event listener to the max value text box to update the graphs
maxValueTextBox.addEventListener("input", () => {
    // Parse the input and max values as numbers
    const inputValue = parseFloat(inputTextBox.value);
    const maxValue = parseFloat(maxValueTextBox.value);

    // Check if the input value is greater than the max value
    if (inputValue > maxValue) {
        alert("Input value cannot be greater than max value!");
        inputTextBox.value = maxValueTextBox.value;
        return;
    }

    // Calculate the percentages for the graphs
    const inputPercentage = (inputValue / maxValue) * 100;
    const maxPercentage = 100;

    // Update the vertical bar graph
    verticalBar.style.height = `${inputPercentage}%`;

    // Update the gradient bar graph
    gradientBar.style.background = `linear-gradient(to top, #4caf50 ${inputPercentage}%, #e0e0e0 ${inputPercentage}%)`;

    // Update the pie chart
    const halfCircle = pieChart.querySelector(".half-circle");
    const percentage = pieChart.querySelector(".percentage");
    const percentageValue = Math.round(inputPercentage);
    const rotationDegrees = percentageValue * 1.8;
    halfCircle.style.transform = `rotate(${rotationDegrees}deg)`;
    percentage.textContent = `${percentageValue}%`;
});
