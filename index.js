let _form = document.querySelector("form");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");

_form.addEventListener("submit", (e) => {
e.preventDefault()
    modal.classList.add("modal-show");
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal-show");
});