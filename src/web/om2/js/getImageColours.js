// getImageColours.js

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // This enables CORS
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = url;
    });
}

function drawImageToCanvas(image) {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, canvas.width, canvas.height).data;
}

function rgbToHex(r, g, b) {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

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
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
}

// K-means clustering algorithm
function kMeans(colors, k) {
    const centroids = [];
    const clusters = new Array(k);

    // Initialize centroids randomly
    for (let i = 0; i < k; i++) {
        centroids.push(colors[Math.floor(Math.random() * colors.length)]);
    }

    let changed = true;
    while (changed) {
        changed = false;

        // Assign colors to nearest centroid
        for (let i = 0; i < k; i++) {
            clusters[i] = [];
        }
        for (const color of colors) {
            let minDist = Infinity;
            let clusterIndex = -1;
            for (let i = 0; i < k; i++) {
                const dist = colorDistance(color, centroids[i]);
                if (dist < minDist) {
                    minDist = dist;
                    clusterIndex = i;
                }
            }
            clusters[clusterIndex].push(color);
        }

        // Update centroids
        for (let i = 0; i < k; i++) {
            const newCentroid = calculateCentroid(clusters[i]);
            if (!areColorsEqual(newCentroid, centroids[i])) {
                centroids[i] = newCentroid;
                changed = true;
            }
        }
    }

    return centroids;
}

function colorDistance(c1, c2) {
    return Math.sqrt(Math.pow(c1[0] - c2[0], 2) + Math.pow(c1[1] - c2[1], 2) + Math.pow(c1[2] - c2[2], 2));
}

function calculateCentroid(cluster) {
    const sum = cluster.reduce((acc, color) => {
        acc[0] += color[0];
        acc[1] += color[1];
        acc[2] += color[2];
        return acc;
    }, [0, 0, 0]);

    return [sum[0] / cluster.length, sum[1] / cluster.length, sum[2] / cluster.length];
}

function areColorsEqual(c1, c2) {
    return c1[0] === c2[0] && c1[1] === c2[1] && c1[2] === c2[2];
}

function filterColors(colors) {
    return colors.filter(([r, g, b]) => {
        const [h, s, l] = rgbToHsl(r, g, b);
        return l > 10 && l < 93; // Ignore very dark and very light colors
    });
}

function getDominantColors(imageData, numColors = 5) {
    const colors = [];
    const step = 4;

    for (let i = 0; i < imageData.length; i += step) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        colors.push([r, g, b]);
    }

    const filteredColors = filterColors(colors);
    const centroids = kMeans(filteredColors, numColors);
    return centroids.map(([r, g, b]) => rgbToHex(r, g, b));
}


export async function getKeyColoursFromImage(url, numColours = 5) {
    url = url.slice(0, -1) + '2';

    try {
        const image = await loadImage(url);
        const imageData = drawImageToCanvas(image);
        const keyColors = getDominantColors(imageData, numColours);
        return keyColors;
    } catch (error) {
        console.error('Error loading image:', error);
    }
}