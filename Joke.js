document.getElementById('jokeBtn').addEventListener('click', getJoke);

function getJoke() {
    const jokeDisplay = document.getElementById('jokeDisplay');
    
    fetch('https://open.spotify.com/') // JokeAPI endpoint
        .then(response => response.json())
        .then(data => {
            if (data.type === 'single') {
                jokeDisplay.textContent = data.joke;
            } else {
                jokeDisplay.textContent = `${data.setup} - ${data.delivery}`;
            }
        })
        .catch(error => {
            jokeDisplay.textContent = 'Oops! Something went wrong!';
            console.error('Error:', error);
        });
}
