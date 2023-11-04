function func(){
    let inputname = document.getElementById("input_name");
    let inputcomment = document.getElementById("input_comment");
    if(inputname.value.length > 0 && inputcomment.value.length > 0){
        document.getElementById("btn").disabled = false;
    }
    else{
        document.getElementById("btn").disabled = true;
    }
}