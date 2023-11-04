let usernameInput = document.getElementById("username");
let commentInput = document.getElementById("input_comment");
let commentButton = document.querySelector(".comment-btn");

usernameInput.addEventListener("input", toggleButtonState);
commentInput.addEventListener("input", toggleButtonState);

function toggleButtonState() {
  if (usernameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
    commentButton.classList.add("active");
    commentButton.removeAttribute("disabled");
  } else {
    commentButton.classList.remove("active");
    commentButton.setAttribute("disabled", true);
  }
}
