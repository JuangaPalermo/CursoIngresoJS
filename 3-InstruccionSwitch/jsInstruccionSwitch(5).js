function mostrar()
{
//tomo la edad  
var hora = document.getElementById('hora').value;
 
if (hora < 0 || hora >24){

    alert("La hora seleccionada no es correcta")
}
else{

    switch(hora){
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            alert("Es de mañana");
            break;

        default:
            alert("NO es de mañana")
    }
}

}//FIN DE LA FUNCIÓN