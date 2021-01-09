//This is the constant for the temperature in Kelvin
const kelvin = 0;
//Here is the variable and equations to find celsius
let celsius = kelvin - 273;
//Here is the variable and equations to find fahrenheit
let fahrenheit = celsius*(9/5) + 32;
//Here is the equation to find fahrenheit round down
console.log(Math.floor(fahrenheit));
//Here is the interpolation of the above values
console.log(`The temperature is ${Math.round(fahrenheit)} degrees Fahrenheit.`);