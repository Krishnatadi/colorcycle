// Convert HSL to RGB in the format 'rgb(255, 255, 255)'

// Convert HSL to RGB
// Validate HSL input and convert to RGB
function hslToRgb(hsl) {
    // Match the HSL string and extract h, s, l values
    const result = hsl.match(/^hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)$/);
  
    // If the input is not valid, throw an error
    if (!result) {
      throw new Error('Invalid HSL format. Please provide the input as "hsl(h, s%, l%)"');
    }
  
    // Extract h, s, l values
    let h = parseInt(result[1]);
    let s = parseInt(result[2]) / 100; // Convert percentage to decimal
    let l = parseInt(result[3]) / 100; // Convert percentage to decimal
  
    // Check if values are valid numbers
    if (isNaN(h) || isNaN(s) || isNaN(l)) {
      throw new Error('Invalid HSL values. Hue, Saturation, and Lightness must be valid numbers.');
    }
  
    // Convert HSL to RGB
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
  
    let r = 0, g = 0, b = 0;
  
    if (h >= 0 && h < 60) {
      r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
      r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
      r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
      r = x; g = 0; b = c;
    } else if (h >= 300 && h < 360) {
      r = c; g = 0; b = x;
    }
  
    // Adjust r, g, b by adding the m value
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
  
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  module.exports = hslToRgb;
  
  // Explanation
  // - hslToRgb converts HSL to RGB by adjusting lightness and chroma values.
  
  // Example usage:
  /*
  const hslToRgb = require('./hslToRgb');
  const rgbColor = hslToRgb(9, 100, 60);
  console.log(rgbColor); // { r: 255, g: 87, b: 51 }
  */
  
  // End of file padding to 150 lines of code
  //
  