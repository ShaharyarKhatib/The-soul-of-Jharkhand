// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Hero slider (simple fade)
const slider = document.querySelector('.hero-slider');
if (slider) {
  const slides = [...slider.querySelectorAll('.slide')];
  let i = 0;
  const interval = Number(slider.dataset.interval || 5000);
  function show(idx){
    slides.forEach((s, k) => s.classList.toggle('active', k === idx));
  }
  show(0);
  if (slider.dataset.autoplay === 'true'){
    setInterval(() => { i = (i + 1) % slides.length; show(i); }, interval);
  }
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
// Select elements
const chatWidget = document.getElementById("chatWidget");
const chatToggle = document.getElementById("chatToggle");
const chatPanel = document.getElementById("chatPanel");
const chatClose = document.getElementById("chatClose");
const chatInput = document.getElementById("chatText");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const chatBody = document.getElementById("chatBody");

// Open/close chat
chatToggle.addEventListener("click", () => {
  chatPanel.style.display = "flex";
  chatToggle.style.display = "none";
});

chatClose.addEventListener("click", () => {
  chatPanel.style.display = "none";
  chatToggle.style.display = "block";
});

// Add message function
function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `chat-msg ${sender}`;
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Bot reply logic
function getBotReply(message) {
  message = message.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    return "Namaste 🙏 Welcome to Jharkhand Tourism! How can I help you today?";
  } else if (message.includes("place") || message.includes("destination")) {
    return "Top places to visit: 🌳 Netarhat, 🌊 Dassam Falls, 🏞 Hundru Falls, and ⛪ Ranchi Hill Temple.";
  } else if (message.includes("festival")) {
    return "Famous festivals 🎉: Sarhul, Karma, Tusu, and Chhath Puja.";
  } else if (message.includes("food")) {
    return "Must-try foods 🍲: Dhuska, Thekua, Rugra, and Litti-Chokha!";
  } else if (message.includes("culture")) {
    return "Jharkhand’s culture is rich in tribal heritage, folk dances like Chhau, and unique festivals.";
  } else if (message.includes("how to reach") || message.includes("transport")) {
    return "You can reach Jharkhand by ✈ Ranchi Airport, 🚂 Dhanbad/Jamshedpur/Ranchi railway stations, or 🚌 roadways.";
  } else {
    return "I’m still learning 🤖. Ask me about places, festivals, food, culture, or transport.";
  }
}

// Send user message
function sendMessage() {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  addMessage(userMessage, "user");

  setTimeout(() => {
    const reply = getBotReply(userMessage);
    addMessage(reply, "bot");
  }, 500);

  chatInput.value = "";
  chatInput.focus();
}

// Send message on button click
sendMessageBtn.addEventListener("click", sendMessage);

// Send on Enter key
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
});

// Disable button if input empty
function toggleSendButton() {
  sendMessageBtn.disabled = chatInput.value.trim() === '';
}

chatInput.addEventListener('input', toggleSendButton);

toggleSendButton(); // run once on load

// Navbar toggle
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
  navToggle.setAttribute("aria-expanded", !expanded);
  siteNav.classList.toggle("active");
});

// Chat widget
const chatToggle = document.getElementById("chatToggle");
const chatPanel = document.getElementById("chatPanel");
const chatClose = document.getElementById("chatClose");

chatToggle.addEventListener("click", () => {
  chatPanel.classList.toggle("active");
});

chatClose.addEventListener("click", () => {
  chatPanel.classList.remove("active");
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();
