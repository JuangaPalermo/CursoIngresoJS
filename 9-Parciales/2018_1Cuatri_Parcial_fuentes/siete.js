/*Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el
sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{
    var acumuladorNotas = 0;
    var promedioNotas;
    var notaMinima;
    var sexoMenor;
    var sexo;
    var nota;
    var varonesArribaDe6 = 0;
    var flag = 0;
    

    for ( i = 0 ; i < 5 ; i++ ){

        sexo = prompt("Ingrese su sexo (f o m): ");

        while (sexo !="m" && sexo !="f") {

            sexo = prompt("El sexo ingresado es invalido, intentelo nuevamente (f o m): ")

        }

        nota = parseInt(prompt("Ingrese la nota: "));
        while (nota < 0 || nota > 10 || isNaN(nota)){

            nota = parseInt(prompt("La nota ingresada es invalida, intentelo nuevamente (0 - 10): "));

        }

        if (flag == 0 || nota < notaMinima){

            notaMinima = nota;
            sexoMenor = sexo;
            flag = 1

        }


        if (sexo == "m" && nota >= 6){

            varonesArribaDe6++
        }

        acumuladorNotas = acumuladorNotas + nota;

    }

    promedioNotas = acumuladorNotas / 5;

    alert ("El promedio de las notas es " + promedioNotas);
    alert ("La nota mas baja es " + notaMinima + " y el sexo de esa persona es " + sexoMenor);
    alert ("La cantidad de varones que sacaron notas arriba o iguales a 6 son: " + varonesArribaDe6);

    alert ("hola" + "\n hola" + "\n chau")
    

}
