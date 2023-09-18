const changingText = document.getElementById('animtext');
const words = ['Website', 'App', 'UI/UX', 'Myself'];
let currentIndex = 0;

function changeText() {
  changingText.textContent = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;
}

// Set an interval to change the text every 2000 milliseconds (2 seconds)
setInterval(changeText, 2000);

