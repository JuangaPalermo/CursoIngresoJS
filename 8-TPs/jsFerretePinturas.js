/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var conversion;
    
    temperatura = parseFloat(document.getElementById("Temperatura").value);

    conversion = ((temperatura-32)*5/9).toFixed(2);

    alert("La temperatura expresada en Grados Celsius es: " + conversion + "°C");


}

function CentigradosFahrenheit () 
{
	var temperatura;
    var conversion;
    
    temperatura = parseFloat(document.getElementById("Temperatura").value);

    conversion = ((temperatura*9/5)+32).toFixed(2);

    alert("La temperatura expresada en Grados Fahrenheit es: " + conversion + "°F");
}
