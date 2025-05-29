const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  userInput.value = "";

  setTimeout(() => {
    const botReply = getBotReply(message);
    appendMessage("bot", botReply);
  }, 600);
});

function appendMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
  const msg = input.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hi there! 👋 How can I help you today?";
  } else if (msg.includes("your name")) {
    return "I'm ChatBot, your virtual assistant.";
  } else if (msg.includes("how are you")) {
    return "I'm just code, but thanks for asking! 😊";
  } else if (msg.includes("weather")) {
    return "I'm not connected to the internet, but it looks great in here!";
  } else if (msg.includes("bye")) {
    return "Goodbye! Have a great day! 👋";
  } else if (msg.includes("help")) {
    return "Sure! Ask me about my name, how I feel, or say hello.";
  } else {
    return "I'm not sure how to respond to that yet. 🤖";
  }
}
