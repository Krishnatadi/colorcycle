// randomColor.js - Generates random color in HEX, RGB, and HSL formats

// Generate random color in HEX, RGB, and HSL
// Function to generate a random RGB value
function generateRandomColor() {
    // Generate random values for red, green, and blue
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert RGB to HSL
    const hsl = rgbToHsl(r, g, b);

    // Return an object with color in HEX, RGB, and HSL formats
    return {
        hex: rgbToHex(r, g, b),       // Convert RGB to HEX
        rgb: `rgb(${r}, ${g}, ${b})`, // Return RGB as a string
        hsl: hsl                      // Return HSL as a string
    };
}

// Function to convert RGB to HEX
function rgbToHex(r, g, b) {
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
}

// Function to convert RGB to HSL
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

module.exports = generateRandomColor;

  
  // Explanation
  // - generateRandomColor generates a random color in HEX, RGB, and HSL.
  // - rgbToHex and rgbToHsl convert RGB to the necessary formats.
  
  // Example usage:
  /*
  const generateRandomColor = require('./randomColor');
  const randomColor = generateRandomColor();
  console.log(randomColor);
  */
    
  // End of file padding to 150 lines of code
  //
  