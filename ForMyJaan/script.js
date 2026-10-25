const forgiveBtn = document.getElementById("forgiveBtn");
const modal = document.getElementById("sorryModal");
const closeModal = document.getElementById("closeModal");
const okayBtn = document.getElementById("okayBtn");
const toast = document.getElementById("toast");

function openModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  burstHearts(18);
}
function hideModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
function burstHearts(count = 10) {
  const symbols = ["♥", "♡", "❤", "✧"];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 24}px`;
    heart.style.animationDelay = `${Math.random() * 0.65}s`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3300);
  }
}
forgiveBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", hideModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) hideModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideModal();
});
okayBtn.addEventListener("click", () => {
  hideModal();
  burstHearts(28);
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
});
