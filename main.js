function deleteMe(){
    document.getElementById("myResult").value = "";
}

function calculator(newValue){
    document.getElementById("myResult").value += newValue;
}

function answer(){
   var x =  document.getElementById("myResult").value;
   var y = eval(x);
   document.getElementById("myResult").value = y;


}
