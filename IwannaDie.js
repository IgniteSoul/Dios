//platica con dios
$(document).ready(function(){
	var userProfile = { 
		nombre: ''
		edad: ''
		genero: ''
	}
	var resDios = $('#dios');
	resDios.html('Hola, soy Dios... cual es tu nombre?');

	$('#gfa').click(function(){
		var answer = $('#ans');
		var content = resDios.html(); 
		content += '<p>' + answer.val() + '</p>';
		resDios.html(content);
		if(!userProfile.nombre){
			content += '<p>' + 'Hola ' + answer.val() + '</p>';
			userProfile.nombre = answer.val();
		} else 
			content += '<p>' + 'Ya se cual es tu nombre,' + answer.val() + '</p>';
		content += '<p>' + 'Y... que edad tienes pecador?'+ '</p>';
		resDios.html(content);
		if(!userProfile.edad){
			content += '<p>' + 'Eres todo un cordero de Dios <3' + '</p>';
			userProfile.edad = answer.val();
		}
		answer.val('');
		setTimeout(function(){
			resDios.html(content);
		}, 1000);
		
	});


});
//vil copia de jquery--->document.querySelector('#swag');
//document.onLoad();
/*	var i = 1;
	$('#gfa').click(function(){
		var number = $('#swag');
		number.html('x' + i);
		i++;
	});*/