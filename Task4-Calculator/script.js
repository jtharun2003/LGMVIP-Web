function solve(v){
    var val=document.getElementById('res'); 
    val.value += v;
}
function back(){
    var del=document.getElementById('res');
    del.value=del.value.slice(0,-1);
}
function result(){
    var num =document.getElementById('res').value;
    var num1=eval(num);
    document.getElementById('res').value=num1;
}
document.querySelector('#cl').onclick =function() {
    document.getElementById('res').value="";
}
