let output=document.getElementById("output");
function display(num){
    output.value+=num;
}
function deletelast(){
    output.value=output.value.slice(0,-1);
}
function equal(){
    try{
    if(output!=""){
    output.value=eval(output.value);
}
    else{
        alert("enter something");
    }
}catch(err){
    alert("invalid");
}
}
function clear(){
        output.value = "";
}
