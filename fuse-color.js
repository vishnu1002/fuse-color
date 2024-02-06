

// Function to handle orientation change to top
function topOri() {
  const gradientOrientation = "to top";
  document.body.style.background = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value})`;

  document.getElementById("gradientCode").value = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value});`;
}

function rightTopOri() {
  const gradientOrientation = "to right top";
  document.body.style.background = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value})`;

  document.getElementById("gradientCode").value = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value});`;
}

function rightBottomOri() {
  const gradientOrientation = "to right bottom";
  document.body.style.background = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value})`;

  document.getElementById("gradientCode").value = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value});`;
}

function rightOri() {
  const gradientOrientation = "to right";
  document.body.style.background = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value})`;

  document.getElementById("gradientCode").value = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value});`;
}

function circleOri() {
  const gradientOrientation = "circle";
  document.body.style.background = `radial-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value})`;

  document.getElementById("gradientCode").value = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value});`;
}

function leftOri() {
  const gradientOrientation = "to left";
  document.body.style.background = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value})`;

  document.getElementById("gradientCode").value = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value});`;
}

function leftBottomOri() {
  const gradientOrientation = "to left bottom";
  document.body.style.background = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value})`;

  document.getElementById("gradientCode").value = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value});`;
}

function leftTopOri() {
  const gradientOrientation = "to left top";
  document.body.style.background = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value})`;

  document.getElementById("gradientCode").value = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value});`;
}

function bottomOri() {
  const gradientOrientation = "to bottom";
  document.body.style.background = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value})`;

  document.getElementById("gradientCode").value = `linear-gradient(${gradientOrientation},
    ${document.getElementById("colorInput1").value},
    ${document.getElementById("colorInput2").value} 50%,
    ${document.getElementById("colorInput3").value});`;
}







// Function to generate random color
function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Function to generate random colors
function generateRandomColors() {
  return [generateRandomColor(), generateRandomColor(), generateRandomColor()];
}

// Function to generate and apply gradient
// Function to generate and apply gradient with smoother transition
function generateGradient() {
  const colors = generateRandomColors();
  const gradientString = `linear-gradient(to right bottom, ${colors[0]}, ${colors[1]} 50%, ${colors[2]})`;
  document.body.style.background = gradientString;

  // Update color inputs and color picker containers
  for (let i = 0; i < colors.length; i++) {
    const colorInput = document.getElementById(`colorInput${i + 1}`);
    const colorPicker = document.getElementById(`colorPicker${i + 1}`);
    const colorPickerContainer = document.getElementById(`color-picker${i + 1}`);
    const selectedColor = colors[i];

    colorInput.value = selectedColor;
    colorPicker.value = selectedColor;
    colorPickerContainer.style.backgroundColor = selectedColor;
    colorPickerContainer.style.borderColor = selectedColor;

    // Update text color based on brightness
    handleColorPickerChange(`colorPicker${i + 1}`);
  }

  // Update gradient code
  const gradientCode = document.getElementById("gradientCode");
  gradientCode.value = `${gradientString};`;
}


// Function to copy gradient code
function copyText() {
  const gradientCode = document.getElementById("gradientCode").value;
  navigator.clipboard.writeText(gradientCode);
}

// Function to handle color picker change
function handleColorPickerChange(colorPickerId) {
  const selectedColor = document.getElementById(colorPickerId).value;
  const colorInput = document.getElementById(
    `colorInput${colorPickerId.slice(-1)}`
  );
  const colorPickerContainer = document.getElementById(
    `color-picker${colorPickerId.slice(-1)}`
  );

  // Update color input and color picker container
  colorInput.value = selectedColor;
  colorPickerContainer.style.backgroundColor = selectedColor;
  colorPickerContainer.style.borderColor = selectedColor;

  // Update color input text color based on brightness
  const rgb = hexToRgb(selectedColor);
  if (rgb) {
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    colorInput.style.color = brightness > 128 ? "black" : "white";
  }
}

// Event listeners for color picker inputs
["colorPicker1", "colorPicker2", "colorPicker3"].forEach((colorPickerId) => {
  const colorPicker = document.getElementById(colorPickerId);
  colorPicker.addEventListener("input", () => {
    handleColorPickerChange(colorPickerId);
    updateGradient();
  });

  // Add event listener to select the text in the color input field when clicked
  const colorInput = document.getElementById(`colorInput${colorPickerId.slice(-1)}`);
  colorInput.addEventListener("click", () => {
    colorInput.select();
  });
});

// Function to convert hex color to RGB
function hexToRgb(hex) {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  return (
    match && {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16),
    }
  );
}

// Function to update gradient
function updateGradient() {
  const gradient = `linear-gradient(to right bottom, 
    ${document.getElementById("colorInput1").value}, 
    ${document.getElementById("colorInput2").value} 50%, 
    ${document.getElementById("colorInput3").value})`;

  document.body.style.background = gradient;
  document.getElementById("gradientCode").value = `${gradient};`;
}

// Initial gradient generation
generateGradient();

// Function to open color picker when the color-picker div is clicked
function openColorPicker(colorPickerId) {
  document.getElementById(colorPickerId).click();
}

// Event listeners for opening color picker when the color-picker div is clicked
["color-picker1", "color-picker2", "color-picker3"].forEach(
  (colorPickerDivId) => {
    const colorPickerDiv = document.getElementById(colorPickerDivId);
    colorPickerDiv.addEventListener("click", () => {
      openColorPicker(`colorPicker${colorPickerDivId.slice(-1)}`);
    });
  }
);

// Download Gradient

function downloadGradient() {
  var canvas = document.createElement('canvas');
  canvas.width = 1920;
  canvas.height = 1080;
  var ctx = canvas.getContext('2d');

  // Draw the current gradient on the canvas
  var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, document.getElementById("colorInput1").value);
  gradient.addColorStop(0.5, document.getElementById("colorInput2").value);
  gradient.addColorStop(1, document.getElementById("colorInput3").value);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Create a link element to download the image
  var link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'gradient.png';
  link.click();
}
