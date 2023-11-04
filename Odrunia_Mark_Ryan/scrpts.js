function commntbtn() {
    let name = document.getElementById("full_name")
    let txtarea = document.getElementById("story")

    if (name.value.length > 0 && txtarea.value.length > 0){
        document.getElementById("btn_comm").disabled = false
    }
    else{
        document.getElementById("btn_comm").disabled = true
    }
}
