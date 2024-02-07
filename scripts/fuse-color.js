//fusecolor script

// Function to set gradient orientation and update background
function setGradient(gradientOrientation) {
    const container = document.getElementById("container");
    container.style.background = `linear-gradient(${gradientOrientation},
        ${document.getElementById("colorInput1").value},
        ${document.getElementById("colorInput2").value} 50%,
        ${document.getElementById("colorInput3").value})`.replace(/\n\s*/g, '');

    document.getElementById("gradientCode").value = `linear-gradient(${gradientOrientation},
        ${document.getElementById("colorInput1").value},
        ${document.getElementById("colorInput2").value} 50%,
        ${document.getElementById("colorInput3").value});`.replace(/\n\s*/g, '');
}

// Call the function with different gradient orientations as needed
function circleOri() {
    const gradientOrientation = "circle";
    const container = document.getElementById("container");
    container.style.background = `radial-gradient(${gradientOrientation},
        ${document.getElementById("colorInput1").value},
        ${document.getElementById("colorInput2").value} 50%,
        ${document.getElementById("colorInput3").value})`.replace(/\n\s*/g, '');

    document.getElementById("gradientCode").value = `radial-gradient(${gradientOrientation},
        ${document.getElementById("colorInput1").value},
        ${document.getElementById("colorInput2").value} 50%,
        ${document.getElementById("colorInput3").value});`.replace(/\n\s*/g, '');
}

function topOri() {setGradient("to top");}

function rightTopOri() {setGradient("to right top");}

function rightBottomOri() {setGradient("to right bottom");}

function rightOri() {setGradient("to right");}

function leftOri() {setGradient("to left");}

function leftBottomOri() {setGradient("to left bottom");}

function leftTopOri() {setGradient("to left top");}

function bottomOri() {setGradient("to bottom");}

// Generate random colors
function generateRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)
.padStart(6, "0")}`;
}

// Generate even more random colors
function generateRandomColors() {
    return [generateRandomColor(), generateRandomColor(), generateRandomColor()];
}

// Gradient with smoother transition
function generateGradient() {
    const colors = generateRandomColors();
    const gradientString = `linear-gradient(to right bottom, ${colors[0]}, ${colors[1]} 50%, ${colors[2]})`;
    //document.body.style.background = gradientString;

    const container = document.getElementById("container");
    container.style.background = gradientString;

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

generateGradient();

// Function to update gradient
function updateGradient() {
    const gradient = `linear-gradient(to right bottom, 
    ${document.getElementById("colorInput1").value}, 
    ${document.getElementById("colorInput2").value} 50%, 
    ${document.getElementById("colorInput3").value})`.replace(/\n\s*/g, '');

    //document.body.style.background = gradient;
    const container = document.getElementById("container");
    container.style.background = gradient;

    document.getElementById("gradientCode").value = `${gradient};`;
}


// Function to open color picker when the color-picker div is clicked
function openColorPicker(colorPickerId) {
    document.getElementById(colorPickerId).click();
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
        document.execCommand("copy");
    });
});

// Event listeners for opening color picker when the color-picker div is clicked
["color-picker1", "color-picker2", "color-picker3"].forEach(
    (colorPickerDivId) => {
        const colorPickerDiv = document.getElementById(colorPickerDivId);
        colorPickerDiv.addEventListener("click", () => {
            openColorPicker(`colorPicker${colorPickerDivId.slice(-1)}`);
        });
    }
);

// Handle color picker change
function handleColorPickerChange(colorPickerId) {
    const selectedColor = document.getElementById(colorPickerId).value;
    const colorInput = document.getElementById(`colorInput${colorPickerId.slice(-1)}`);
    const colorPickerContainer = document.getElementById(`color-picker${colorPickerId.slice(-1)}`);

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

// Convert HEX color to RGB
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

// Copyopy gradient code
function copyText() {
    const gradientCode = document.getElementById("gradientCode").value;
    navigator.clipboard.writeText(gradientCode);
}

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