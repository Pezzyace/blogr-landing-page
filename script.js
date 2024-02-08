const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");
const navigation = document.getElementById("navigation");
const contact = document.querySelectorAll(".contact");
const tooltip = document.querySelector("tooltip");


hamburger.addEventListener("click", () => {
  navigation.style.display = "flex";
  hamburger.style.display = "none";
  closeBtn.style.display = "inline-flex";
})

closeBtn.addEventListener("click", () => {
  navigation.style.display = "none";
  hamburger.style.display = "inline-flex";
  closeBtn.style.display = "none";
})

contact.forEach(contactBtn => {
  contactBtn.addEventListener('click', () => {
    tooltip.style.display = "flex";
  });
});

tooltip.addEventListener('click', () => {
  tooltip.style.display = "none";
})
