/*al presionar el botón pedir un número. mostrar los numeros divisores desde el 1
 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.*/

function mostrar()
{

    var numero = parseInt(prompt("Ingrese el numero que desee"));
    var cantDivisores = 0

    for (i = 1; i <= numero; i++ ){

        while (isNaN(numero)){

            numero = prompt("Lo que ingreso no es un numero, ingrese otro dato: ");

        }

        if ( numero % i == 0 ){

            document.write("Numero divisor: " + i + "</br>");
            cantDivisores++;

        }

    }
    document.write("La cantidad de numeros divisores es " + cantDivisores);


}//FIN DE LA FUNCIÓN