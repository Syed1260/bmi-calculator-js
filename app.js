const button = document.querySelector("button");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bmiOutput = document.getElementById("bmi");
const conditionText = document.querySelector("h3");

button.addEventListener("click", () => {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    if (!height || !weight || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight!");
        return;
    }
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters ** 2);
    bmiOutput.value = bmi.toFixed(2);

    let condition = "";

    if (bmi < 18.5) {
        condition = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        condition = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        condition = "Overweight";
    } else {
        condition = "Obese";
    }
    conditionText.textContent = `Weight CONDITION: ${condition}`;
});

