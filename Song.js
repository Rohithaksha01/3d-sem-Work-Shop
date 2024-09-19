document.getElementById('randomImageBtn').addEventListener('click', fetchRandomImage);

function fetchRandomImage() {
    const imageElement = document.getElementById('randomImage');
    const imageContainer = document.getElementById('imageContainer');
    
    // Show a loading message or spinner (optional)
    imageContainer.innerHTML = 'Loading...';
    
    // Fetch a random image from Lorem Picsum
    fetch('https://picsum.photos/600/400')
        .then((response) => {
            // Set the fetched image URL to the img element
            imageElement.src = response.url;
            imageElement.style.display = 'block';  // Show the image element
            imageContainer.innerHTML = '';  // Clear the loading message
            imageContainer.appendChild(imageElement);  // Append the image
        })
        .catch((error) => {
            console.error('Error fetching image:', error);
            imageContainer.innerHTML = 'Failed to load image!';
        });
}
