function mostrar()
{
var mes = document.getElementById('mes').value;

switch (mes){

    case "Febrero":
        alert("Tiene 28 dias");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noiviembre":
        alert("Tiene 30 dias");
        break;
    default:
        alert("Tiene 31 dias");

}
	
}//FIN DE LA FUNCIÓN