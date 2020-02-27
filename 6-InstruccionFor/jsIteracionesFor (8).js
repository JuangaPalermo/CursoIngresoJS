/* al presionar el botón pedir un número. Informar si el numero es PRIMO o no. */ 

function mostrar()

{
    
    var contador = 0;
    var numero = parseInt(prompt("Por favor, ingrese un numero: "))

    for ( i=1 ; i <= numero ; i++ ){

         if (numero % i == 0){

            contador++;

        }

    }

    if (contador == 2){

        alert("El numero ingresado es primo");

    } else {

        alert("El numero ingresado NO es primo")

    }

    




}//FIN DE LA FUNCIÓN