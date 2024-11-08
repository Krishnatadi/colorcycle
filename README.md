# ColorCycle
ColorCycle is a JavaScript package that helps developers easily convert color formats between Hex, RGB, and HSL. This tool is ideal for designers and developers working on color management for websites, applications, and graphical projects. Simply provide a color in any of the supported formats, and ColorCycle will convert it into the others.



## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [ColorCycle Methods](#colorcycle-methods)
* [Benefits](#benefits)
* [Usage](#usage)
* [Compatibility and Framework Support](#compatibility-and-framework-support)
* [Browser Compatibility](#browser-compatibility)
* [Testing](#testing)
* [Community and Ecosystem](#community-and-ecosystem)
* [Issues and Feedback](#issues-and-feedback)



## Features

- **Color Format Conversion**: Convert between HEX, RGB, and HSL color formats.
- **Random Color Generation**: Generate random colors in HEX format for UI elements and design projects.
- **Color Name Parsing**: Parse common color names (e.g., "red", "blue", "magenta") into their corresponding HEX, RGB, and HSL values.
- **Color Brightness Adjustment**: Easily adjust the brightness of any color by a specified percentage.
- **Web Safe Color Palette**: Get the closest web-safe color palette for any input color.
- **Color Contrast Calculation**: Calculate the contrast ratio between two colors, useful for ensuring accessibility (WCAG compliance).
- **Color Scheme Generation**: Automatically generate color schemes such as monochromatic, complementary, triadic, and analogous from a base color.



## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

To install `saltyhash`, use npm or yarn:
```console
$ npm install colorcycle
```
```console
$ yarn add colorcycle
```



# ColorCycle Methods

| Method                | Description                                                            | Example Use Case                                                                 |
|-----------------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| `hexToRgb(hex)`        | Converts a HEX color to an RGB object (e.g., `{ r: 255, g: 87, b: 51 }`). | `ColorCycle.hexToRgb('#FF5733') → { r: 255, g: 87, b: 51 }`                    |
| `hexToHsl(hex)`        | Converts a HEX color to an HSL object (e.g., `{ h: 9, s: 100, l: 60 }`). | `ColorCycle.hexToHsl('#FF5733') → { h: 9, s: 100, l: 60 }`                    |
| `rgbToHex(rgb)`        | Converts an RGB object to a HEX color (e.g., `"#FF5733"`).              | `ColorCycle.rgbToHex({ r: 255, g: 87, b: 51 }) → "#FF5733"`                    |
| `rgbToHsl(rgb)`        | Converts an RGB object to an HSL object (e.g., `{ h: 9, s: 100, l: 60 }`). | `ColorCycle.rgbToHsl({ r: 255, g: 87, b: 51 }) → { h: 9, s: 100, l: 60 }`     |
| `hslToHex(hsl)`        | Converts an HSL object to a HEX color (e.g., `"#FF5733"`).              | `ColorCycle.hslToHex({ h: 9, s: 100, l: 60 }) → "#FF5733"`                    |
| `hslToRgb(hsl)`        | Converts an HSL object to an RGB object (e.g., `{ r: 255, g: 87, b: 51 }`). | `ColorCycle.hslToRgb({ h: 9, s: 100, l: 60 }) → { r: 255, g: 87, b: 51 }`     |
| `randomColor()`        | Generates a random HEX color.                                           | `ColorCycle.randomColor() → "#F5A623"`                                          |
| `colorParser(color)`   | Parses color names (e.g., "red", "blue") to HEX, RGB, and HSL.          | `ColorCycle.colorParser('red') → { hex: '#FF0000', rgb: { r: 255, g: 0, b: 0 }, hsl: { h: 0, s: 100, l: 50 } }` |



## Benefits

- **Time-Saving**: By using `ColorCycle`, you can quickly convert between color formats without writing custom conversion functions.
- **Improve Design Workflow**: Easily get color conversions in the format you need for your projects, helping speed up design and development processes.
- **Enhanced Accessibility**: Use the color contrast feature to make sure your designs are accessible to all users, especially those with visual impairments.
- **Color Consistency**: Ensure that color schemes are consistent across different formats and devices.
- **Random Color Generation**: Great for generating random colors for design mockups, web UI elements, or testing.
- **Easy Integration**: The library is lightweight and easy to integrate into any JavaScript project.
- **Comprehensive Parsing**: Supports common color names, making it easier to work with familiar colors like "red", "green", "blue", etc.



## Usage
To use the ColorCycle library in your project, make sure to install it first. Once installed, you can require it in your JavaScript files and access various methods for color conversions. Whether you're working with HEX, RGB, or HSL values, ColorCycle provides simple functions to convert between these formats, generate random colors, and even parse color names. This makes it easy to manipulate and work with colors in your application.

### 1. hexToRgb(hex)
Converts a HEX color to an RGB object. We convert the HEX value "#FF5733" to its RGB components: 255 for Red, 87 for Green, and 51 for Blue.
```javascript
const hexColor = "#FF5733";
const rgb = ColorCycle.hexToRgb(hexColor);
console.log(rgb);  // Output: { r: 255, g: 87, b: 51 }
```

### 2.hexToHsl(hex)
Converts a HEX color to an HSL object. We convert the HEX color "#FF5733" to HSL values, where H is 9°, S is 100%, and L is 60%.
```javascript
const hexColor = "#FF5733";
const hsl = ColorCycle.hexToHsl(hexColor);
console.log(hsl);  // Output: { h: 9, s: 100, l: 60 }
```

### 3. rgbToHex(rgb)
Converts an RGB object to a HEX color. We convert the RGB values {r: 255, g: 87, b: 51} to the HEX color "#FF5733".
```javascript
const rgbColor = { r: 255, g: 87, b: 51 };
const hex = ColorCycle.rgbToHex(rgbColor);
console.log(hex);  // Output: "#FF5733"
```

### 4. rgbToHsl(rgb)
Converts an RGB object to an HSL object. We convert the RGB color {r: 255, g: 87, b: 51} to HSL values: Hue = 9°, Saturation = 100%, Lightness = 60%.
```javascript
const rgbColor = { r: 255, g: 87, b: 51 };
const hsl = ColorCycle.rgbToHsl(rgbColor);
console.log(hsl);  // Output: { h: 9, s: 100, l: 60 }
```

### 5. hslToHex(hsl)
Converts an HSL object to a HEX color. We convert the HSL color { h: 9, s: 100, l: 60 } to the HEX color "#FF5733".
```javascript
const hslColor = { h: 9, s: 100, l: 60 };
const hex = ColorCycle.hslToHex(hslColor);
console.log(hex);  // Output: "#FF5733"
```

### 6. hslToRgb(hsl)
Converts an HSL object to an RGB object. We convert the HSL color { h: 9, s: 100, l: 60 } to the RGB color { r: 255, g: 87, b: 51 }.
```javascript
const hslColor = { h: 9, s: 100, l: 60 };
const rgb = ColorCycle.hslToRgb(hslColor);
console.log(rgb);  // Output: { r: 255, g: 87, b: 51 }
```

### 7. randomColor()
Generates a random HEX color. This method generates a random HEX color like "#F5A623".
```javascript
const randomHex = ColorCycle.randomColor();
console.log(randomHex);  // Output: "#F5A623"
```

### 8. colorParser(color)
Parses common color names and returns the corresponding HEX, RGB, and HSL values. This function takes the color name "red" and returns its HEX, RGB, and HSL values.
```javascript
const colorInfo = ColorCycle.colorParser('red');
console.log(colorInfo);
// Output: 
// {
//   hex: '#FF0000',
//   rgb: { r: 255, g: 0, b: 0 },
//   hsl: { h: 0, s: 100, l: 50 }
// }
```


## Compatibility and Framework Support
`ColorCycle` is lightweight and framework-agnostic, but it works seamlessly with modern JavaScript frameworks like React, Vue.js, Angular, and Svelte.

```javascript
const ColorCycle = require('colorcycle');

const MyComponent = () => {
  const color = "#FF5733";
  const rgbColor = ColorCycle.hexToRgb(color);

  return (
    <div style={{ backgroundColor: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})` }}>
      Colorized Background
    </div>
  );
};

```


# Browser Compatibility

**ColorCycle** is compatible with most modern browsers and works well in both client-side JavaScript and Node.js environments. It has been tested and supports:

- **Chrome**
- **Firefox**
- **Safari**
- **Edge**
- **IE 11 and above** (some functions may not work in older versions)
`Note:` For older browsers, you might need to use a polyfill for certain JavaScript functions like `Object.assign()`.



## Testing
You can test `ColorCycle` methods using any testing framework, such as Mocha, Jest, or Jasmine. Here is an example of using Jest to test one of the methods:

```javascript
// Testing color conversion: hex to RGB
const ColorCycle = require('colorcycle');

test('Converts HEX to RGB', () => {
  const hex = "#FF5733";
  const expected = { r: 255, g: 87, b: 51 };
  const result = ColorCycle.hexToRgb(hex);
  expect(result).toEqual(expected);
});

```


## Community and Ecosystem

By using **ColorCycle**, you are joining a growing community of developers who are passionate about colors and design. We encourage you to share your experiences, ideas, and feedback on GitHub Discussions or any community platform of your choice.

- **GitHub Discussions**: Share use cases, report bugs, and suggest features.

We'd love to hear from you and see how you're using **ColorCycle** in your projects!


## Issues and Feedback
For issues, feedback, and feature requests, please open an issue on our [GitHub Issues page](http://github.com/krishnatadi/colorcycle/issues). We actively monitor and respond to community feedback.
