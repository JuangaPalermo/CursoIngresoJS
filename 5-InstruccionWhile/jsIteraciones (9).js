function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta;

	do
	{
		numero = parseFloat(prompt("Ingrese el numero que desee: "));
		contador++

		if (numero < minimo){

			minimo = numero;
		}

		if (numero > maximo){

			maximo = maximo;
		}
		
		respuesta = prompt("Desea seguir agregando numeros? Ingrese \"si\" o \"no\"");

	}while(respuesta!='no');

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;






}//FIN DE LA FUNCIÓN