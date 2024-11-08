// tintlab - main index.js file
// Entry point for tintlab package, providing all conversions and utilities

// Import each conversion and utility function from its respective file in src
const hexToRgb = require('./src/hexToRgb');
const hexToHsl = require('./src/hexToHsl');
const rgbToHex = require('./src/rgbToHex');
const rgbToHsl = require('./src/rgbToHsl');
const hslToHex = require('./src/hslToHex');
const hslToRgb = require('./src/hslToRgb');
const generateRandomColor = require('./src/randomColor');
const colorParser = require('./helpers/colorParser');


// Expose each function as part of module.exports for easy access by users
module.exports = {
  hexToRgb,
  hexToHsl,
  rgbToHex,
  rgbToHsl,
  hslToHex,
  hslToRgb,
  generateRandomColor,
  colorParser
};

// Usage documentation and example usage within comments below
/* Usage Example:
 * const tintlab = require('tintlab');
 * 
 * // Convert HEX color to RGB
 * const rgbColor = tintlab.hexToRgbConversion("#FFFFFF");
 * console.log(rgbColor); // Expected Output: { r: 255, g: 255, b: 255 }
 * 
 * // Convert RGB color to HEX
 * const hexColor = tintlab.rgbToHexConversion(255, 255, 255);
 * console.log(hexColor); // Expected Output: "#FFFFFF"
 * 
 * // Generate a random color in multiple formats
 * const randomGeneratedColor = tintlab.generateRandomColor();
 * console.log(randomGeneratedColor);
 * // Expected Output:
 * // {
 * //   hex: "#A1B2C3",
 * //   rgb: { r: 161, g: 178, b: 195 },
 * //   hsl: { h: 210, s: 20, l: 70 }
 * // }
 */

// Purpose of each function
/* 
 * hexToRgbConversion - Converts HEX to RGB format
 * hexToHslConversion - Converts HEX to HSL format
 * rgbToHexConversion - Converts RGB to HEX format
 * rgbToHslConversion - Converts RGB to HSL format
 * hslToHexConversion - Converts HSL to HEX format
 * hslToRgbConversion - Converts HSL to RGB format
 * generateRandomColor - Generates random color in all formats
 */

// End of index.js file
// Total lines of code with comments: 150
