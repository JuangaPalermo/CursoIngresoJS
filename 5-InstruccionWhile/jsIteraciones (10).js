function mostrar()
{

	var contador=0;
	var sumanegativos = 0;
	var sumapositivos = 0;
	var contadorpositivos = 0;
	var contadornegativos = 0;
	var contadorceros = 0;
	var numerospares = 0;
	var promediopositivos;
	var promedionegativos;
	var diferencia;
	var respuesta;

	var numero;

	//declarar contadores y variables 
	
	do
	{
		numero = parseInt(prompt("Ingrese el numero que desee: "))

		while (isNaN(numero)){

			numero = parseInt(prompt("Lo que ingreso no es un numero, ingrese nuevamente: "))

		} 

		if (numero > 0){

			sumapositivos = sumapositivos + numero;
			contadorpositivos++;



		} else if (numero < 0){

			sumanegativos = sumanegativos + numero;
			contadornegativos++;


		}else if (numero == 0){

			contadorceros++;


		}
		
		if (numero%2==0){

			numerospares++
		
		}

		

		
	
	}while(respuesta!="no")

	promediopositivos = sumapositivos / contadorpositivos;
	promedionegativos = sumanegativos / contadornegativos;
	diferencia = sumapositivos - sumanegativos;

	

}//FIN DE LA FUNCIÓN