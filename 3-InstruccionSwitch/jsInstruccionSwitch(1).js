function mostrar()
{
//tomo la edad  

var mes = document.getElementById('mes').value;

switch (mes){

    case "Enero":
        alert("que comiences bien el año!!!");
    break;

    case "Marzo":
        alert("a clases!!!");
    break;

    case "Julio":
        alert("se vienen las vacaciones!!!");
    break;

    case "Diciembre":
        alert("felices fiestas!!!");
    break;

    /* en caso de que quiera agregar un mensaje para las opciones que no contemple
    puedo agregar la siguiente linea de codigo:
    default:
        alert("A ese mes no lo tuve en cuenta");*/

}

}//FIN DE LA FUNCIÓN