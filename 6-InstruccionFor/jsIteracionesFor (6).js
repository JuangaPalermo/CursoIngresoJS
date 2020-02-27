function mostrar()

/*al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y
 mostrar la cantidad de numeros pares encontrados.*/

{

    var numero = parseInt(prompt("Ingrese el numero que desee"));
    var cantidadpar = 0

    for (i = 1; i <= numero; i++ ){

        while (isNaN(numero)){

            numero = prompt("Lo que ingreso no es un numero, ingrese otro dato: ");

        }

        if ( i % 2 == 0 ){

            document.write(i + "</br>");
            cantidadpar++;

        }

    }
    document.write("La cantidad de numeros pares es " + cantidadpar);




}//FIN DE LA FUNCIÓN