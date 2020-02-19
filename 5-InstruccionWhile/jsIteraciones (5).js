function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "m" && sexo != "f" && sexo != "F" && sexo != "M"){

    sexo = prompt("Error, el sexo no es valido. Ingrese F o M nuevamente: ");
    
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN