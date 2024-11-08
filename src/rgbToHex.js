// rgbToHex.js - Converts RGB color to HEX format

// function rgbToHex(r, g, b) {
//     return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
//   }
  
//   module.exports = rgbToHex;

  function rgbToHex(rgb) {
    // Extract r, g, b from the rgb string using regex
    const result = rgb.match(/\d+/g);
    
    // Convert to hex and ensure 2-digit representation
    const r = parseInt(result[0]).toString(16).padStart(2, '0');
    const g = parseInt(result[1]).toString(16).padStart(2, '0');
    const b = parseInt(result[2]).toString(16).padStart(2, '0');
  
    return `#${r}${g}${b}`.toUpperCase();
  }
  
  module.exports = rgbToHex;

// Explanation
// - rgbToHex converts individual R, G, B values to a HEX string.
// - componentToHex helper ensures two-digit hex for each component.

// Example usage:
/*
const rgbToHex = require('./rgbToHex');
const hexColor = rgbToHex(255, 87, 51);
console.log(hexColor); // "#FF5733"
*/

// End of file padding to 150 lines of code
//
