'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
	nombre: "Ana Betancurt Leiva",
	profesion: "Desarrollador junior",
	correo: "anitabetancourt@hotmail.com",
	telefono: "+57 3006454464",
	perfil: "se destaca por la organizacion en el cumplimiento de labores y requerimientos que se exigen,capaz de liderar y solucionar problemas rapidamente. posee muchos valores, tiene la facilidad para la comunicacion y el buen entendimiento desde la comprension y la empatia con las personas que la rodean.",
	habilidades: {
		comunicativas:['organizada, ','proactiva, ','Actitud Positiva, ','Tolerancia, ','Respeto, ','honestidad, ','Orden, ','Apoyo y compernsión'],
		gestion: ['capaz de liderar, ','facilidad para desenvolver en trabajo en equipo, ','Responsabilidad, ','habilidad para absorber conocimientos teoricos y practicos, ','analisis de Decisiones'],
		tecnicas: ['esteticista y cosmetologa, ','estudiante de ADSI']
	},
	hobbies: ['Escuchar Música, ', 'Ver Peliculas, ', 'viajar, ', 'hacer postres']
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://thumbs.dreamstime.com/z/programming-concept-idea-working-computer-coding-testing-writing-program-using-internet-different-software-set-124176396.jpg";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	var aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}