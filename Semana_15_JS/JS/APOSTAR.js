function apostar() {
    var a=Math.round(Math.random()*10);// Funcion Random Numero de 1 al 10 azzar
    document.getElementById("resultado").value=a;
    var b=document.getElementById("apostado").value;

    //Validar si acerto numero

    if (a==b){
        document.getElementById("salida").value="Gano";
    }else{
        document.getElementById("salida").value="Perdio";
    }
}
function cancel(){
    document.getElementById("apostado").value="";
    document.getElementById("resultado").value="";
    document.getElementById("salida").value="";
}