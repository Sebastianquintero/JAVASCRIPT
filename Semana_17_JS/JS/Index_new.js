function openMenu(){
    document.getElementById("mainMenu").style.width="480px";//vista en celular
    document.getElementById("mainMenu").style.display="flex";//vista en celular
    document.getElementById("mainMenu").style.height="1000px";//vista en celular
    document.getElementById("openMenu").style.display="none";//vista en celular
}
function closeNav(){
    document.getElementById("mainMenu").style.width="0px";
    document.getElementById("mainMenu").style.transition="0.9s all";
    window.location.reload(); // Es semejante a cargar pagina web
}