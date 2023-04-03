const container = document.querySelector(".compass");
const compass = document.querySelector(".body");
const needle = document.querySelector(".pointer");

function trackMouse(e) {
  const rect = container.getBoundingClientRect();
    const centerX = (rect.left + rect.width) / 2;
    const centerY = (rect.top + rect.height) / 2;
  const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const radians = Math.atan2(mouseX, mouseY)
    const angle = (radians * (180 / Math.PI) * -1) + 180;
    needle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    needle.style.transition = "transform 0.5s ease-out";
}

window.addEventListener("mousemove", trackMouse);
