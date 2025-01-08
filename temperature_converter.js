// Temperature Converter
const temp = parseFloat(prompt("Enter the temperature:"));
const unit = prompt("Enter the unit (C for Celsius, F for Fahrenheit):").toUpperCase();

let convertedTemp;
if (unit === "C") {
    convertedTemp = (temp * 9/5) + 32;
    console.log(`${temp}°C is ${convertedTemp.toFixed(2)}°F`);
} else if (unit === "F") {
    convertedTemp = (temp - 32) * 5/9;
    console.log(`${temp}°F is ${convertedTemp.toFixed(2)}°C`);
} else {
    console.log("Invalid unit");
}