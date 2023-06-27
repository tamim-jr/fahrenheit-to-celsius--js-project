//fahrenheit to celsius method (32°F − 32) × 5/9 = 0°C 

var farInput = parseFloat(prompt("Input your Farenheit value here: "));

var output =  (farInput - 32) * 5/9;

output = output.toFixed(2);
document.write("Your Celsius value is: " + output);