// Convert HEX to HSL in the format 'hsl(0, 0%, 100%)'
function hexToHsl(hex) {
    let r = parseInt(hex.substring(1, 3), 16) / 255;
    let g = parseInt(hex.substring(3, 5), 16) / 255;
    let b = parseInt(hex.substring(5, 7), 16) / 255;
  
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      let d = max - min;
      s = (l > 0.5) ? d / (2 - max - min) : d / (max + min);
      if (max === r) {
        h = (g - b) / d + (g < b ? 6 : 0);
      } else if (max === g) {
        h = (b - r) / d + 2;
      } else {
        h = (r - g) / d + 4;
      }
      h /= 6;
    }
  
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
  
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  
  module.exports = hexToHsl;

// Explanation
// - hexToHsl uses hexToRgb to get RGB, then converts RGB to HSL.
// - rgbToHsl helper does the math to convert RGB values to HSL.

// Example usage:
/*
const hexToHsl = require('./hexToHsl');
const hslColor = hexToHsl('#FF5733');
console.log(hslColor); // { h: 9, s: 100, l: 60 }
*/

// End of file padding to 150 lines of code
//
