const container = document.querySelector(".compass");
const compass = document.querySelector(".body");
const needle = document.querySelector(".pointer");

let angle = 0;

function trackMouse(e) {
  const rect = container.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  //Calculate the angle between the mouse position and the center of the compass
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const radians = Math.atan2(mouseY - centerY, mouseX - centerX);
  let degrees = radians * (180 / Math.PI);
  if (degrees < 0) {
    degrees += 360;
  }
  // Calculate the shortest distance between the current angle and the new angle
  let angleDiff = degrees - angle;
  angleDiff = (((angleDiff % 360) + 540) % 360) - 180;
  // Update the angle of the compass needle by adding the angle difference
  angle += angleDiff;
  needle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  needle.style.transition = "transform 0.5s ease-out";
}

window.addEventListener("mousemove", trackMouse);
