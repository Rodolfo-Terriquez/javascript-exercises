const convertToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * (5/9)).toFixed(1);
  if (Number.isInteger(celsius)) {
    celsius = Math.floor(celsius);
  } 
  return parseFloat(celsius);
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = ((celsius * (9/5)) + 32).toFixed(1);
  if (fahrenheit == 0) {
    fahrenheit = 0;
  } 
  return parseFloat(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
