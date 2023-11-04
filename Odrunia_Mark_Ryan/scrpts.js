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
