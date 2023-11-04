function commntbtn() {
    let name = document.getElementById("fullname")
    let txtarea = document.getElementById("story")

    if (name.value.length > 0 && txtarea.value.length > 0){
        document.getElementById("btncomm").disabled = false
    }
    else{
        document.getElementById("btncomm").disabled = true
    }
}
