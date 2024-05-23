const bigImage = document.querySelector(".big-image");

// Get the computed style of the div
const computedStyle = window.getComputedStyle(bigImage);

// Get the background image URL
const backgroundImage = computedStyle.getPropertyValue("background-image");

console.log(backgroundImage);
window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bigImage.style.opacity = 1 - window.pageYOffset / 900;
  bigImage.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}