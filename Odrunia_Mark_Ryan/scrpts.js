function commntbtn() {
    let name = document.querySelector("#full_name")
    let txtarea = document.querySelector("#story")

    if (name.value.length > 0 && txtarea.value.length > 0){
        document.querySelector("#btn_comm").disabled = false
    }
    else{
        document.querySelector("#btn_comm").disabled = true
    }
}
