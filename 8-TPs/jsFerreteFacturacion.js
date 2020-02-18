/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var resultado = 0;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    resultado = (precio1 + precio2 + precio3);
    alert("La suma de los tres precios es: " + resultado);
}

function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var promedio = 0;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    promedio = (precio1 + precio2 + precio3) / 3;
    alert("El promedio de los tres numeros es: " + promedio.toFixed(2));	
}

function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var totalsiniva = 0;
    var totalconiva = 0;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    totalsiniva = precio1 + precio2 + precio3
    totalconiva = totalsiniva*21/100 + totalsiniva
    alert("El precio final de los 3 productos, con el IVA, es: " + totalconiva.toFixed(2));
	
}