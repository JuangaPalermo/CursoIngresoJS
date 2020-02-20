function mostrar()
{

	var flag = 0;
	var minimo;
	var maximo;
	var respuesta;
	var numero;

	do {
		
		numero = parseInt(prompt("Ingrese el numero que desee: "))

		while (isNaN(numero)){

			numero = parseInt(prompt("Lo que ingreso no es un numero, ingrese nuevamente: "))

		}

		if (flag == 0 || numero > maximo){

			maximo = numero

		}

		if (flag == 0 || numero < minimo){

			minimo = numero
			flag = 1

		}

		
		respuesta = prompt("Desea ingresar otro numero? Ingrese \"si\" o \"no\".");

	} while (respuesta == "si");
	

	


	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;






}//FIN DE LA FUNCIÓN