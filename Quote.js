document.getElementById('randomVideoBtn').addEventListener('click', fetchRandomVideo);

// Replace with your Pexels API key
const PEXELS_API_KEY = 'YOUR_API_KEY';

function fetchRandomVideo() {
    const videoElement = document.getElementById('randomVideo');
    const videoContainer = document.getElementById('videoContainer');

    // Show a loading message
    videoContainer.innerHTML = 'Loading...';

    // Fetch random videos from Pexels API
    fetch('https://api.pexels.com/videos/popular', {
        headers: {
            Authorization: PEXELS_API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        // Select a random video from the array
        const randomIndex = Math.floor(Math.random() * data.videos.length);
        const randomVideo = data.videos[randomIndex];

        // Set the video source to the random video URL
        videoElement.src = randomVideo.video_files[0].link;
        videoElement.style.display = 'block';  // Show the video element

        // Clear the loading message and show the video
        videoContainer.innerHTML = '';
        videoContainer.appendChild(videoElement);
    })
    .catch(error => {
        console.error('Error fetching video:', error);
        videoContainer.innerHTML = 'Failed to load video!';
    });
}
