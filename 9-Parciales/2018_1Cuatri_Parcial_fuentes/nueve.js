/*Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 
(validar), la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:

- a) La cantidad de temperaturas pares.
- b) La marca del producto más pesado
- c) La cantidad de productos que se conservan a menos de 0 grados.
- d) El promedio del peso de todos los productos.
- f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )*/

function mostrar()
{   
    var marca;
    var peso;
    var temperatura;
    var cantTemperaturasPares = 0;
    var marcaProductoMasPesado;
    var cantAlmacenamientoBajoCero = 0;
    var promedioPesos;
    var sumaPesos = 0;
    var cantProductos = 0;
    var pesoMaximo;
    var pesoMinimo;
    var flag = 0;

    do{
        //INGRESO DE DATOS
        marca = prompt("Ingrese la marca del producto: ");

        peso = parseInt(prompt("Ingrese el peso del producto: "));

        while (peso < 1 || peso > 100){

            peso = parseInt(prompt("Ingresó un peso inválido, inténtelo nuevamente: "));
        } 

        temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento del producto: "));

        while (temperatura < -30 || temperatura > 30){

            temperatura = parseInt(prompt("Ingresó una temperatura inválida, inténtelo nuevamente: "));
        }

        // PUNTO A:
        if (temperatura % 2 == 0){

            cantTemperaturasPares++;
        }

        //PUNTO B y F:

        if (flag == 0 || peso > pesoMaximo){

            pesoMaximo = peso;
            marcaProductoMasPesado = marca;
        }

        if (flag == 0 || peso < pesoMinimo){

            pesoMinimo = peso;
            flag = 1
        }

        //PUNTO C: 

        if (temperatura < 0){

            cantAlmacenamientoBajoCero++;
        }

        //PUNTO D (1):

        sumaPesos = sumaPesos + peso;
        cantProductos++;
        
        respuesta = prompt("Desea seguir ingresando articulos? si/no: ")

       
    } while (respuesta == "si");

        //PUNTO D (2):

        promedioPesos = sumaPesos / cantProductos;

    document.write("Cantidad de temperaturas pares: " + cantTemperaturasPares + "</br>");
    document.write("Marca del producto mas pesado: " + marcaProductoMasPesado + "</br>");
    document.write("Cantidad de productos que se almacenan a menos de 0 grados: " + cantAlmacenamientoBajoCero + "</br>");
    document.write("Promedio del peso de todos los productos: " + promedioPesos + "</br>");
    document.write("Peso maximo: " + pesoMaximo + "</br>");
    document.write("Peso minimo: " + pesoMinimo + "</br>");

}
