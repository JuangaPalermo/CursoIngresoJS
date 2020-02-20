function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta;
	var numero;

	do{

		numero = parseFloat(prompt("Ingrese el numero que desee: "));
		
		if (numero >= 0){

		
		positivo = positivo + numero
		
		} else {

			contador++
			negativo = negativo * numero
			
		}

		respuesta=prompt("Desea seguir agregando numeros? Ingrese \"si\" o \"no\"");
	}while (respuesta == "si");

	if (contador == 0){

		negativo = "Usted no ingreso ningun numero negativo"
		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN