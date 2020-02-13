function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	while ( numero > 9 || numero < 0 || isNaN(numero) ){

		numero = parseInt(prompt("El numero no coincide, recuerde que debe ser entre 0 y 9 (inclusive). Vuelva a intentar:"));
	}

	document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN