const msgs = [
    "🌵🌵🌵🌵🌵 Too many cactus 🌵🌵🌵🌵🌵🌵🌵🌵🌵",
    "📜 Not enough scrolls",
    "💪 We're all in this togther",
    "😝 Use moar emoji"
]

function changeMessage() {
    const newMsg = msgs[Math.floor(Math.random() * msgs.length)];
    const compEl = document.querySelector('#myapp');
    compEl.attributes.message.value = newMsg;        
}