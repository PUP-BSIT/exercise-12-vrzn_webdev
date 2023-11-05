function validate() {
    let name = document.querySelector("#input_name").value.trim();
    let comment = document.querySelector("#input_comment").value.trim();
    let commentButton = document.querySelector("#btn");

    if (name.length > 0 && comment.length > 0) {
      commentButton.disabled = false;
    } else {
      commentButton.disabled = true;
    }
}

function addComment() {
    let name = document.querySelector("#input_name").value;
    let comment = document.querySelector("#input_comment").value;

    if (name && comment) {
      let commentSection = document.querySelector(".guide-comment");
      let newComment = document.createElement("div");
      newComment.classList.add("comment-style");
      newComment.innerHTML = `
        <p class="comment-name">${name}</p>
        <p class="comments">${comment}</p>`;
      commentSection.appendChild(newComment);

      document.querySelector("#input_name").value = "";
      document.querySelector("#input_comment").value = "";
      document.querySelector("#btn").disabled = true;
    }
}