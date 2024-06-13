const imageList = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200",
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/seed/picsum/200/300"
];

const apiError = false;

async function fetchImages() {
    try {
        const response = await fetch('https://fakestoreapi.com/products'); // Example API that returns image data
        const data = await response.json();
        populateImages(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


const populateImages = (response = []) => {
    const container = document.getElementById('imageContainer');
    container.innerHTML = ''; // Clear previous content

    response.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.image; // Use thumbnailUrl for small images, or image.url for full size
        imgElement.alt = image.title;
        container.appendChild(imgElement);
    });
}

function loadCSS(filename) {
    var file = document.createElement('link');
    file.rel = 'stylesheet';
    file.href = filename;
    document.head.appendChild(file);
}

document.addEventListener('DOMContentLoaded', () => {
    loadCSS('../src/imageList.css');
    fetchImages();
});
