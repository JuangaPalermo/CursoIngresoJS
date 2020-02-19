function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta = "si";
	var numero;

	while (respuesta == "si"){

		numero = parseFloat(prompt("Ingrese el numero que desee: "));
		
		if (numero >= 0){

		contador++
		positivo = positivo + numero
		
		} else {

			contador++
			negativo = negativo * numero
			
		}
		respuesta=prompt("Desea seguir agregando numeros? Ingrese \"si\" o \"no\"");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN