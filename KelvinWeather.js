
// The value of kelvin will stay constant
const kelvin = 273;
//Celsium id 273 degrees less than Kelvin
const celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees celsius`)
//Conversion to Fahrenheit
let fahrenheit = celsius  * (9 / 5) + 32;
//Round down the Fahrenheit value
fahrenheit = Math.floor(fahrenheit);
//Logging temperature in Fahrenheit to console
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
//Conversion from Celsius to Newton
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton`); 
// Getting used to Git 