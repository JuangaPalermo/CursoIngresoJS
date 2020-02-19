function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while (contador < 5){
		numero = parseFloat(prompt("Ingrese el numero que desee: "));
		contador++
		acumulador = acumulador + numero
		
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN