// Simulated response from "ChatGPT"
const responses = [
    "Hello! How can I assist you today?",
    "I'm here to help with any questions you have.",
    "Feel free to ask me anything.",
    "Let's chat about whatever you like!"
];

// Function to generate a random response
function getRandomResponse() {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to handle sending a message
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const messageText = userInput.value.trim();

    if (messageText) {
        // Display user's message
        const messagesDiv = document.getElementById('messages');
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.innerHTML = `<p>${messageText}</p>`;
        messagesDiv.appendChild(userMessage);

        // Clear the input
        userInput.value = '';

        // Simulate a response from the bot
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot';
            botMessage.innerHTML = `<p>${getRandomResponse()}</p>`;
            messagesDiv.appendChild(botMessage);
            messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
        }, 1000);
    }
}

// Add event listener to the send button
document.getElementById('sendButton').addEventListener('click', sendMessage);

// Allow pressing Enter to send a message
document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
