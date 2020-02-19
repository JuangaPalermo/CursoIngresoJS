function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = "si";

	while (respuesta == "si"){

		numero = parseFloat(prompt("Ingrese el numero que desee: "));
		contador++
		acumulador = acumulador + numero
		respuesta = prompt("Desea seguir agregando numeros? Ingrese \"si\" o \"no\"");
		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=(acumulador/contador).toFixed(2);

}//FIN DE LA FUNCIÓN