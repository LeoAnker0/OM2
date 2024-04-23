/* is mobile */
export function is_mobile() {
    const mediaQuery = window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");
    if (mediaQuery.matches) {
        return true;
    } else {
        return false;
    }
}

export function is_dark() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
    } else {
        return false;
    }
}

export function removeLastExtension(filename) {
    const parts = filename.split('.');
    if (parts.length > 1) {
        parts.pop(); // Remove the last element (file extension)
        return parts.join('.');
    }
    return filename;
}

export function is_odd(num) {
    return (num % 2) == 1;
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
}

export function formatTimeSeconds(val) {
    let h = 0,
        m = 0,
        s;
    val = parseInt(val, 10);
    if (val > 60 * 60) {
        h = parseInt(val / (60 * 60), 10);
        val -= h * 60 * 60;
    };
    if (val > 60) {
        m = parseInt(val / 60, 10);
        val -= m * 60;
    };
    s = val;
    val = (h > 0) ? h + ':' : '';
    val += (m > 0) ? ((m < 10 && h > 0) ? '0' : '') + m + ':' : '0:';
    val += ((s < 10) ? '0' : '') + s;

    return val;
};

export function formatTimeDaysDelta(milliSeconds) {
    const now = Date.now();
    const differenceDays = (now - milliSeconds) / (1000 * 60 * 60 * 24);
    let checkedIndicator;

    if (differenceDays < 0.01) { // Less than 0.01 days (approximately 14 minutes)
        checkedIndicator = "Now";
        return checkedIndicator;
    } else if (differenceDays < 1) {
        checkedIndicator = "Now"; // Convert to hours
        return checkedIndicator;
    } else if (differenceDays < 8) {
        checkedIndicator = Math.floor(differenceDays) + "d";
        return checkedIndicator;
    } else if (differenceDays < 29) {
        const noWeeks = Math.floor(differenceDays / 7);
        checkedIndicator = noWeeks + "w";
        return checkedIndicator;
    } else if (differenceDays < 365) {
        const noMonths = Math.floor(differenceDays / 28);
        checkedIndicator = noMonths + "m";
        return checkedIndicator;
    } else {
        const noYears = Math.floor(differenceDays / 365);
        checkedIndicator = noYears + "y";
        return checkedIndicator;
    }
}

export function formatTimeDaysToHuman(milliSeconds) {
    const now = Date.now();
    const differenceSeconds = (now - milliSeconds) / 1000;

    if (differenceSeconds < 60) {
        return `Now`;
    } else if (differenceSeconds < 3600) {
        const minutes = Math.floor(differenceSeconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (differenceSeconds < 86400) {
        const hours = Math.floor(differenceSeconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (differenceSeconds < 172800) {
        return 'Yesterday';
    } else if (differenceSeconds < 31536000) {
        const days = Math.floor(differenceSeconds / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
        const date = new Date(milliSeconds);
        const year = date.getFullYear();
        return `${year}`;
    }
}

// Format file size
export function formatFileSizeBytes(size) {
    if (size < 1024) {
        return `${size} b`;
    } else if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(2)} kb`;
    } else {
        return `${(size / 1024 / 1024).toFixed(2)} mb`;
    }
}

export function getPositionInParentElement(el) {
    if (!el) return -1;
    var i = 0;
    do {
        i++;
    } while (el = el.previousElementSibling);
    return i;
}

export function debounce(func, delay) {
    let timeoutId;

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
}

// Debounce stuff...
export function debounce2(func, delay) {
    let timeoutId;

    return function(...args) {
        const context = this;

        // Clear the previous timeout
        clearTimeout(timeoutId);

        // Set a new timeout
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

export function generateUniqueID() {
    // Generate a random portion
    const randomPart = Math.random().toString(36).substr(2, 6); // 6 characters long

    // Get current timestamp
    const timestamp = Date.now().toString(36);

    // Concatenate random portion and timestamp
    const uniqueID = randomPart + timestamp;

    return uniqueID;
}

let hoverTimeout;
const elementColorMap = new Map();

export function changeColourOnHover(element, originalColor, newColour) {
    // Add the element to the color map if not present
    if (!elementColorMap.has(element)) {
        elementColorMap.set(element, {
            originalColor: originalColor,
            isChanging: false,
            animationFrameId: null, // Track animation frame ID
        });
    }

    function updateColor() {
        const currentTime = Date.now();
        const elapsed = currentTime - start;

        // Check if the element is still in the map
        if (!elementColorMap.has(element)) {
            return;
        }

        // Calculate the progress from 0 to 1 based on the elapsed time
        const progress = Math.min(elapsed / 500, 1); // Return to original color more quickly (500ms)

        // Check if the element is still in the map
        if (!elementColorMap.has(element)) {
            return;
        }

        // Calculate the new color based on the progress
        const newColor = calculateColor(
            elementColorMap.get(element).originalColor,
            progress,
            newColour
        );

        // Apply the new color to the element
        element.style.backgroundColor = newColor;

        if (progress < 1 || elementColorMap.get(element).isChanging) {
            // Continue updating the color until the transition is complete
            elementColorMap.get(element).animationFrameId = requestAnimationFrame(updateColor);
        } else {
            // Reset the color to the original after the transition is complete
            console.log("hide this thang");
            element.style.backgroundColor = "";

            // Remove the element from the color map
            elementColorMap.delete(element);
        }

    }

    // Clear previous timeout
    clearTimeout(hoverTimeout);

    // Set a timeout to stop the color change after a certain duration
    hoverTimeout = setTimeout(() => {
        // Check if the element is still in the map and is not changing
        if (elementColorMap.has(element) && !elementColorMap.get(element).isChanging) {
            // Reset the color to the original after the transition is complete
            console.log("hide this thang");
            element.style.backgroundColor = "";

            // Cancel the animation frame
            cancelAnimationFrame(elementColorMap.get(element).animationFrameId);

            // Remove the element from the color map
            elementColorMap.delete(element);
        }
    }, 500);

    // Set the flag to indicate that color change is active
    elementColorMap.get(element).isChanging = true;

    // Capture the start time for elapsed time calculation
    const start = Date.now();

    // Start the color update
    elementColorMap.get(element).animationFrameId = requestAnimationFrame(updateColor);
}

export function changeColourByOrder(element, originalColor, newColour, effect, time) {
    const effectTime = time || 2500; // Default time value if not provided

    // Add the element to the color map if not present
    if (!elementColorMap.has(element)) {
        elementColorMap.set(element, {
            originalColor: originalColor,
            isChanging: false,
            animationFrameId: null, // Track animation frame ID
        });
    }

    function updateColor() {
        const currentTime = Date.now();
        const elapsed = currentTime - start;

        // Check if the element is still in the map
        if (!elementColorMap.has(element)) {
            return;
        }

        // Calculate the progress based on the elapsed time and specified time
        const progress = Math.min(elapsed / (effect === 'hardNewToOld' ? (effectTime * 4 / 5) : 500), 1);

        // Check if the element is still in the map
        if (!elementColorMap.has(element)) {
            return;
        }

        // Calculate the new color based on the effect
        let newColor;
        if (effect === 'hardNewToOld' && progress < 1) {
            // Apply the new color
            newColor = newColour;
        } else {
            // Transition back to the original color
            newColor = calculateColor(
                elementColorMap.get(element).originalColor,
                Math.min(progress, 1), // Ensure progress doesn't exceed 1
                newColour
            );
        }

        // Apply the new color to the element
        element.style.backgroundColor = newColor;

        if (progress < 1 || elementColorMap.get(element).isChanging) {
            // Continue updating the color until the transition is complete
            elementColorMap.get(element).animationFrameId = requestAnimationFrame(updateColor);
        } else {
            // Reset the color to the original after the transition is complete
            element.style.backgroundColor = "";

            // Remove the element from the color map
            elementColorMap.delete(element);
        }

        /* when the animation is finished, set the style colour of the element to null, and remove from the map */
        if (progress == 1) {
            element.style.backgroundColor = "";
            elementColorMap.delete(element);
        }
    }

    // Clear previous timeout
    clearTimeout(hoverTimeout);

    // Set a timeout to stop the color change after a certain duration
    hoverTimeout = setTimeout(() => {
        // Check if the element is still in the map and is not changing
        if (elementColorMap.has(element) && !elementColorMap.get(element).isChanging) {
            // Reset the color to the original after the transition is complete
            element.style.backgroundColor = "";

            // Cancel the animation frame
            cancelAnimationFrame(elementColorMap.get(element).animationFrameId);

            // Remove the element from the color map
            elementColorMap.delete(element);
        }
    }, effectTime);

    // Set the flag to indicate that color change is active
    elementColorMap.get(element).isChanging = true;

    // Capture the start time for elapsed time calculation
    const start = Date.now();

    // Start the color update
    elementColorMap.get(element).animationFrameId = requestAnimationFrame(updateColor);
}

export function isElementVisibleVertically(element) {
    const elementRect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        elementRect.top >= 0 &&
        elementRect.bottom <= viewportHeight
    );
}

function cancelAnimationFrameForFunction(func) {
    const animationFrames = new Map();

    function wrappedFunction(...args) {
        // Execute the original function and store the returned animation frame ID
        const animationFrameId = func(...args);

        // Store the animation frame ID in the map
        animationFrames.set(func, animationFrameId);

        return animationFrameId;
    }

    // Add a method to cancel the animation frame for the specific function
    wrappedFunction.cancelAnimationFrame = function() {
        const animationFrameId = animationFrames.get(func);

        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrames.delete(func);
        }
    };

    return wrappedFunction;
}

function calculateColor(originalColor, progress, newColour) {
    // Replace this with your color calculation logic
    // Example: Blend white with the original color based on progress
    const blendedColor = blendColors(
        newColour,
        originalColor,
        progress
    );
    return blendedColor;
}

function blendColors(color1, color2, ratio) {
    const hex = function(x) {
        x = x.toString(16);
        return x.length === 1 ? '0' + x : x;
    };

    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);

    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);

    const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
    const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
    const b = Math.round(b1 * (1 - ratio) + b2 * ratio);

    return '#' + hex(r) + hex(g) + hex(b);
}

export function getHexColorFromCssVariable(variableName) {
    // Get the HSL value from the CSS variable
    const hslValue = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
    const matches = hslValue.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    let hue;
    let saturation;
    let lightness;


    // Extracted values
    hue = parseInt(matches[1], 10); // Convert to integer
    saturation = parseInt(matches[2], 10); // Convert to integer
    saturation = saturation / 100;
    lightness = parseInt(matches[3], 10); // Convert to integer
    lightness = lightness / 100;

    const rgbValue = hsl2rgb(hue, saturation, lightness);
    const red = scaleTo255(rgbValue[0]);
    const green = scaleTo255(rgbValue[1]);
    const blue = scaleTo255(rgbValue[2]);

    const rgb = {
        r: red,
        g: green,
        b: blue
    }

    // Convert RGB to hex
    const hexValue = rgbToHex(rgb);

    return hexValue;
}

// input: h as an angle in [0,360] and s,l in [0,1] - output: r,g,b in [0,1]
function hsl2rgb(h, s, l) {
    let a = s * Math.min(l, 1 - l);
    let f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [f(0), f(8), f(4)];
}

function scaleTo255(value) {
    // Ensure that the input value is within the [0, 1] range
    const clampedValue = Math.min(1, Math.max(0, value));

    // Scale the value to the [0, 255] range
    const scaledValue = Math.round(clampedValue * 255);

    return scaledValue;
}

function rgbToHex(rgb) {
    const componentToHex = c => {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return '#' + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
}