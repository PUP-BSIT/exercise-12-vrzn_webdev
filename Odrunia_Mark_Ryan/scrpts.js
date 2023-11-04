let submit = document.querySelector("#comment_button")
let user = document.querySelector("#full_name")
let comment = document.querySelector("#story")

function commentButton() {
    let name = document.querySelector("#full_name")
    let txtarea = document.querySelector("#story")

    if (name.value.length > 0 && txtarea.value.length > 0){
        document.querySelector("#comment_button").disabled = false
    }
    else{
        document.querySelector("#comment_button").disabled = true
    }
}

submit.addEventListener("click", () => {
    let username = user.value
    let message = comment.value

    if(username && message) {
        let listItem = document.createElement("li")
        listItem.innerHTML = `${username}, ${message}`;
    }
})
