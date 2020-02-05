/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var aumento;
    
    sueldo = parseInt(document.getElementById("sueldo").value);

    aumento = (sueldo*110/100);

    document.getElementById("resultado").value = aumento;

    // tambien puedo limitar la cantidad de decimales agregandole a la variable .toFixed(CantidadDeDecimalesQueQuiero)
    // por ejemplo podria hacer:
    // aumento = sueldo * 1.1
    // document.getElementById("resultado").value = aumento.toFixed(2)
}
