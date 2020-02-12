function mostrar()
{
    var edad;

    edad = parseInt(document.getElementById("edad").value)

    if (edad >= 13 && edad <= 17) // se lee como "Si estoy dentro del rango"
    {
        alert("Usted es adolescente")
    }
 
    /* tambien puedo hacer una negacion del codeado anterior, que sea equivalente: por ejemplo,
    if (!(edad < 13 || edad > 17)) (lo cual se lee como si no estoy dentro del rango)
    {
        alert("Usted es adolescente")
    }*/
}