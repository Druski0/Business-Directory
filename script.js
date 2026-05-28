const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

const openSignup = document.getElementById("openSignup");
const openLogin = document.getElementById("openLogin");

function showModal(modalToShow, modalToHide) {
  modalToHide.classList.remove("show");
  modalToHide.setAttribute("aria-hidden", "true");

  modalToShow.classList.add("show");
  modalToShow.setAttribute("aria-hidden", "false");
}

openSignup?.addEventListener("click", (e) => {
  e.preventDefault();
  showModal(signupModal, loginModal);
});

openLogin?.addEventListener("click", (e) => {
  e.preventDefault();
  showModal(loginModal, signupModal);
});

// Show/hide password buttons
document.querySelectorAll(".pass-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const sel = btn.getAttribute("data-toggle");
    const input = document.querySelector(sel);
    if (!input) return;

    const isPass = input.type === "password";
    input.type = isPass ? "text" : "password";
    btn.innerHTML = isPass
      ? '<i class="fa-regular fa-eye-slash"></i>'
      : '<i class="fa-regular fa-eye"></i>';
  });
});
