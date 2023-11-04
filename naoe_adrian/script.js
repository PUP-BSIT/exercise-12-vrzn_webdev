function setupCommentSection() {
  let commentText = document.getElementById("comment-text");
  let authorInput = document.getElementById("author");
  let submitButton = document.getElementById("submit-comment");

  commentText.addEventListener("input", function () {
    submitButton.disabled =
      commentText.value.trim() === "" || authorInput.value.trim() === "";
  });

  authorInput.addEventListener("input", function () {
    submitButton.disabled =
      commentText.value.trim() === "" || authorInput.value.trim() === "";
  });

  submitButton.addEventListener("click", function () {
    alert("Comment submitted!");
    commentText.value = "";
    authorInput.value = "";
    submitButton.disabled = true;
  });
}

setupCommentSection();
