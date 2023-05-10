function prefer(){ // Funcion para digiturno preferencial
    let num=1;
    let res=true;

    while(num<=99 && res==true){
        nomuser=prompt("Ingrese Su Nombre de Usuario");
        
        if (nomuser!=null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//contador de turnos
        }else{
            alert("ERROR EN TURNO....");
            break;
        }
    }

}

// Funcion Par Digiturno General

function user(){ // Funcion para digiturno General
    let num=1;
    let res=true;

    while(num<=99 && res==true){
        nomuser=prompt("Ingrese Su Nombre de Usuario");
        
        if (nomuser!=null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//contador de turnos
        }else{
            alert("ERROR EN TURNO....");
            break;
        }
    }

}