/* Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 
(validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:

- a) La cantidad de números pares. 
- b) La cantidad de números impares.
- c) La cantidad de ceros.
- d) El promedio de todos los números positivos ingresados.
- e) La suma de todos los números negativos.
- f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)*/

function mostrar()
{
    var numero;
    var letra;
    var respuesta;
    var cantidadPares = 0;
    var cantidadImpares = 0;
    var cantidadCeros = 0;
    var sumaPositivos = 0;
    var cantidadPositivos = 0;
    var promedioPositivos;
    var sumaNegativos = 0;
    var letraMaxima;
    var numeroMaximo;
    var letraMinima;
    var numeroMinimo;
    var flag = 0;

    do {

        //INGRESO DE DATOS
        letra = prompt("Ingrese la letra que desee, de la A a la Z: ");   
        
        numero = parseInt(prompt("Ingrese el numero que desee, entre -100 y 100: "));

        while (numero < -100 || numero > 100 || isNaN(numero)){
            numero = parseInt(prompt("El numero ingresado es invalido, intente nuevamente (entre -100 y 100): "));
        }

        //VERIFICACION PAR-IMPAR-CERO
        if (numero % 2 == 0 && numero != 0){

            cantidadPares++;

        } else if (numero % 2 != 0){

            cantidadImpares++;

        } else if (numero == 0){

            cantidadCeros++;

        }

        //VERIFICACION POSITIVO/NEGATIVO
        if (numero >= 0){

            sumaPositivos = sumaPositivos + numero;
            cantidadPositivos++;

        } else {

            sumaNegativos = sumaNegativos + numero;

        }

        //ALMACENAMIENTO MAXIMO/MINIMO
        if (flag == 0 || numeroMaximo < numero){

            numeroMaximo = numero;
            letraMaxima = letra;
        }

        if (flag == 0 || numeroMinimo > numero){

            numeroMinimo = numero;
            letraMinima = letra;
            flag = 1;
        }

        respuesta = prompt("¿Desea seguir añadiendo numeros y letras? si/no: ");
    } while (respuesta == "si")

    promedioPositivos = sumaPositivos / cantidadPositivos;

    //MUESTRA DE RESULTADOS
    document.write("La cantidad de números pares (sin contar los ceros) es: " + cantidadPares + "</br>");
    document.write("La cantidad de números impares es: " + cantidadImpares + "</br>");
    document.write("La cantidad de ceros es: " + cantidadCeros + "</br>");
    document.write("El promedio de todos los numeros positivos ingresados es: " + promedioPositivos + "</br>");
    document.write("La suma de todos los numeros negativos ingresados es: " + sumaNegativos + "</br>");
    document.write("El numero maximo es: " + numeroMaximo + " y su letra es: " + letraMaxima + "</br>");
    document.write("El numero minimo es: " + numeroMinimo + " y su letra es: " + letraMinima + "</br>");


}
