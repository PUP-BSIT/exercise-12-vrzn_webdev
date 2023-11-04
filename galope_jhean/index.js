const commentBtn = document.querySelector(".comment-btn");
const nameBox = document.querySelector("#input_name");
const commentBox = document.querySelector("#input_comment");

const handleInputChange = () => {
    const nameLength = nameBox.value.length;
    const commentLength = commentBox.value.length;
    commentBtn.disabled = !(commentLength > 1 && nameLength > 1);
};

commentBox.addEventListener('input', handleInputChange);
nameBox.addEventListener('input', handleInputChange);
