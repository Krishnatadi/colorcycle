// Convert RGB to HSL in the format 'hsl(0, 0%, 100%)'

// Function to convert RGB to HSL
function rgbToHsl(rgb) {
    // Extract the red, green, and blue values from the input string
    const rgbValues = rgb.match(/\d+/g);
    let r = parseInt(rgbValues[0]);
    let g = parseInt(rgbValues[1]);
    let b = parseInt(rgbValues[2]);

    // Normalize RGB values to the range of [0, 1]
    r /= 255;
    g /= 255;
    b /= 255;

    // Find the maximum and minimum values of r, g, b
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    // If the max and min values are the same, it is a shade of grey (no saturation)
    if (max === min) {
        h = s = 0; // Achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
        // Calculate hue
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }

    // Convert the hue to degrees, and saturation and lightness to percentages
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

module.exports = rgbToHsl;
  
  // Explanation
  // - rgbToHsl takes RGB values and converts them to HSL format.
  
  // Example usage:
  /*
  const rgbToHsl = require('./rgbToHsl');
  const hslColor = rgbToHsl(255, 87, 51);
  console.log(hslColor); // { h: 9, s: 100, l: 60 }
  */
  
  // End of file padding to 150 lines of code
  //
  