const commentBtn = document.querySelector(".comment-btn");
const nameBox = document.querySelector("#input_name");
const commentBox = document.querySelector("#input_comment");
const commentContainer = document.querySelector(".comment-container");

const handleInputChange = () => {
    const nameLength = nameBox.value.length;
    const commentLength = commentBox.value.length;
    commentBtn.disabled = !(commentLength > 1 && nameLength > 1);
};

const addComment = () => {
    const name = nameBox.value;
    const comment = commentBox.value;

    if (name && comment) {
        const newComment = document.createElement("div");
        newComment.classList.add("main-comment");
        newComment.innerHTML = `
            <div class="icon">
                <img src="assets/avatar.webp" alt="">
            </div>
            <div class="details">
                <h4>${name}</h4>
                <p>${comment}</p>
            </div>
        `;
        commentContainer.appendChild(newComment);
        nameBox.value = "";
        commentBox.value = "";
        commentBtn.disabled = true;

        window.scrollTo(0, document.body.scrollHeight);
    }
};

commentBtn.addEventListener("click", addComment);
commentBox.addEventListener('input', handleInputChange);
nameBox.addEventListener('input', handleInputChange);
