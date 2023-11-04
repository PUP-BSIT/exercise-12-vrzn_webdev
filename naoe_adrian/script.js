function setupCommentSection() {
  let commentText = document.querySelector("#comment_text");
  let authorInput = document.querySelector("#author");
  let submitButton = document.querySelector("#submit_comment");

  commentText.addEventListener("input", () => {
    submitButton.disabled =
      commentText.value.trim() === "" || authorInput.value.trim() === "";
  });

  authorInput.addEventListener("input", () => {
    submitButton.disabled =
      commentText.value.trim() === "" || authorInput.value.trim() === "";
  });

  submitButton.addEventListener("click", () => {
    alert("Comment submitted!");
    commentText.value = "";
    authorInput.value = "";
    submitButton.disabled = true;
  });
}

setupCommentSection();
