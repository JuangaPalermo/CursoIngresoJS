function mostrar()
{
	var aleatorio
	
	aleatorio = Math.floor(Math.random()*((10+1)-1)+1);

	
	if (aleatorio >= 9)	{
		alert("Su nota es: " + aleatorio + " y su resultado es Excelente")
	}
	else if (aleatorio >= 4){
		alert("Su nota es: " + aleatorio + " y su resultado es Aprobado")
	}
	else {
		alert("Su nota es: " + aleatorio + " asique vamos, la proxima se puede")
	}
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN