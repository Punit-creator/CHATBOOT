const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const message = userInput.value.trim();
  if (message === "") return;

  // Append user's message
  appendMessage("user", message);

  userInput.value = "";

  // Simulate bot response
  setTimeout(() => {
    const botReply = generateBotResponse(message);
    appendMessage("bot", botReply);
  }, 800);
});

function appendMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userMessage) {
  // You can customize this logic for smarter replies
  const replies = [
    "That's interesting!",
    "Can you tell me more?",
    "I'm here to help.",
    "Hmm... Let me think about that.",
    "Could you explain that a bit differently?",
    "I see. Go on.",
    "Tell me more!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}