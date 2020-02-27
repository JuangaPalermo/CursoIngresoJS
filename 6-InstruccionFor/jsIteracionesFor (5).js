function mostrar()
{

    var numeroclave;

    for (; ; ){


        numeroclave = prompt("Ingrese el numero clave: ");

        while (isNaN(numeroclave)){

            numeroclave = prompt("No ingreso un numero, por favor, intentelo nuevamente: ");

        }   if (numeroclave !=9){
            
            alert("No ingreso el numero clave");

        }   else if (numeroclave == 9){

            break;
            
        }

    }


}//FIN DE LA FUNCIÓN