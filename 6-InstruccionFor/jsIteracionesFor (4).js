function mostrar()
{   
    var palabraclave;

    for (;;){


        palabraclave = prompt("Ingrese la palabra clave: ");

        while (!(isNaN(palabraclave))){

            palabraclave = prompt("No ingreso una palabra, por favor, intentelo nuevamente: ");

        }if (palabraclave != "break"){

            alert("No ingreso la palabra clave");

        }else if (palabraclave == "break"){

            break;
        }


}
}//FIN DE LA FUNCIÓN