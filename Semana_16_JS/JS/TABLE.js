function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos"); // Asigna el nombre pelicula ingresado
    filter = input.value.toUpperCase();//Convierte en mayuscula
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");//Asigna todas las filas de la tabla a Arrays
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];//Recorre toda la columna 0 (Nombre pelicula) en todas las filas
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {   //busca nombre pelicula en la tabla columna 0
            tr[i].style.display = "";
        } else {
        tr[i].style.display = "none";
        }
    }       
    }
}