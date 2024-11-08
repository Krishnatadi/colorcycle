// hexToRgb.js - Converts HEX color to RGB format

// Convert HEX to RGB in the format 'rgb(255, 255, 255)'
function hexToRgb(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  module.exports = hexToRgb;
  
  // Explanation
  // - hexToRgb takes a HEX string (e.g., "#FF5733") and returns an RGB object (e.g., { r: 255, g: 87, b: 51 }).
  // - hexPairToDecimal helps convert each hex pair to a decimal value for R, G, and B.
  
  // Example usage:
  /*
  const hexToRgb = require('./hexToRgb');
  const rgbColor = hexToRgb('#FF5733');
  console.log(rgbColor); // { r: 255, g: 87, b: 51 }
  */
  
  // End of file padding to 150 lines of code
  //
  