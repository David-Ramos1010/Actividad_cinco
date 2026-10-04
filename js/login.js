/*
	Debe integrar las funciones ya creadas en la librería utileria.js.  
*/

const form = document.querySelector('#auth-form');
const modeButtons = document.querySelectorAll('.mode-button');
const nameField = document.querySelector('#name-field');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const formTitle = document.querySelector('#form-title');
const formSubtitle = document.querySelector('#form-subtitle');
const submitLabel = document.querySelector('#submit-label');
const formStatus = document.querySelector('#form-status');
let mode = 'login';

modeButtons.forEach((button) => {
/*================================================================*/ //ESTO CAMBIA DE INICIAR SESIÓN A REGISTRARSE
	button.addEventListener('click', () => {
		mode = button.dataset.mode;
		modeButtons.forEach((item) => {
			const active = item === button;
			item.classList.toggle('is-active', active);
			item.setAttribute('aria-selected', active);
		});

		const registering = mode === 'register';
		nameField.hidden = !registering;
/*=================================================================================================================================*/ //ESTO CAMBIA LOS SUBTITULOS DE CADA PALABRA 
		formTitle.textContent = registering ? 'Crea tu cuenta' : 'Inicia sesion';
		formSubtitle.textContent = registering ? 'Empieza a organizar tus ideas hoy.' : 'Entra a tu cuenta para continuar.';
		submitLabel.textContent = registering ? 'Crear mi cuenta' : 'Entrar a mi cuenta';
/*==================================================================================================================================*/ //VARIABLES DECLARADAS EN PASSWORD DEL HTML
		passwordInput.autocomplete = registering ? 'new-password' : 'current-password';
		formStatus.textContent = '';
	});
});

/*==========================================================================================================*/ //VER Ó OCULTAR CONTRASEÑA
document.querySelector('.show-password').addEventListener('click', (event) => {
	const visible = passwordInput.type === 'text';
	passwordInput.type = visible ? 'password' : 'text';
	event.currentTarget.textContent = visible ? 'Ver' : 'Ocultar';
	event.currentTarget.setAttribute('aria-label', visible ? 'Mostrar contrasena' : 'Ocultar contrasena');
});

/*===================================================================================*/ //CUANDO SE TE OLVIDA LA CONTRASEÑA 
document.querySelector('#forgot-link').addEventListener('click', (event) => {
	event.preventDefault();
	formStatus.textContent = 'Te enviaremos un enlace para recuperar tu cuenta.';
});

/*===================================================================================*/

function validarEmail(email) {
 	// Expresión regular para validar el formato del email
 	var regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

 	// Validar el formato del email
 	if (!regex.test(email)) {
  		return false;
	}

 	// Separar el nombre de usuario y el dominio del email
 	var partes = email.split("@");
 	var usuario = partes[0];
 	var dominio = partes[1];

	// Validar que el usuario y el dominio no estén vacíos
	if (usuario.length === 0 || dominio.length === 0) {
		return false;
	}

	// Validar que el usuario y el dominio no contengan caracteres especiales
	var caracteresEspeciales = /[!#$%&'*/=?^_`{|}~]/;

	if (caracteresEspeciales.test(usuario) || caracteresEspeciales.test(dominio)) {
		return false;
	}
 	return true;
}

//Ejemplo de uso
var email = "davidramos@gmail.com";
	if (validarEmail(email)) {
		console.log("Email válido");
	} else {
	console.log("Email inválido");
}

/*================================================================================================================================*/

function validarTexto(text) {
	//Expresión regular para validar el formato del texto
	var regex = /^[a-zA-ZáéíóúüýñÁÉÍÓÚÜÑ\s]+$/;

	//test(); actua como un booleano.
	return regex.test(text);

}

//Ejemplo de uso
var text = "WEIUDDUý eee"
	if (validarTexto(text)) {
		console.log("texto valido");
	} else {
		console.log("texto inválido");
}

/*================================================================================================================================*/
function validarPassword(password){
	var valida = true;

	if ( password.length >= 8 ) {
        	console.log("longitud valida");
	} else {
		console.log("longitud inválida");
		valida = false;
	}

	if ( password.match(/[A-Z]/) ) {
		console.log("Correcto");
	} else {
		console.log("Debe tener al menos una letra en Mayuscula");
		valida = false;
	}
	
	if ( password.match(/\d/) ) {
		console.log("Correcto");
	} else {
		console.log("Debe tener al menos un numero");
		valida = false;
	}

	var espacios = false;
	var cont = 0;

	while (!espacios && (cont < password.length)) {
  		if (password.charAt(cont) == " ")
    		espacios = true;
  		cont++;
	}

	if (espacios) {
  		console.log ("La contraseña no puede contener espacios en blanco");
  		return false;
	}

	if (/[!@#$%^&*(),.?":{}|<>_+\-\[\]\\\/;'`~]/.test(password)) {
		console.log("Correcto");
	} else {
		console.log("Debe tener al menos un caracter especial");
		valida = false;
	}

	return valida;
}

//Ejemplo de uso
var password = "Hola12/";
validarPassword(password);

/*================================================================================================================================*/

form.addEventListener('submit', (event) => {
	event.preventDefault();
	document.querySelectorAll('.field').forEach((field) => field.classList.remove('has-error'));
	document.querySelectorAll('.error-message').forEach((message) => { message.textContent = ''; });
	formStatus.textContent = '';
	formStatus.style.color = '';
	let valid = true;
	const email = document.querySelector('#email');

	const setError = (input, mensaje) => {
		input.closest('.field').classList.add('has-error');
		input.closest('.field').querySelector('.error-message').textContent = mensaje;
		valid = false;
	};

	if (mode === 'register') {
		const nombre = nameInput.value.trim();
		if (!nombre) setError(nameInput, 'Completa este campo.');
		else if (!validarTexto(nombre)) setError(nameInput, 'Escribe un nombre válido (solo letras).');
	}

	const emailValue = email.value.trim();
	if (!emailValue) setError(email, 'Completa este campo.');
	else if (!validarEmail(emailValue)) setError(email, 'Escribe un email válido.');

	const passwordValue = passwordInput.value;
	if (!passwordValue) setError(passwordInput, 'Completa este campo.');
	else if (!validarPassword(passwordValue))
		setError(passwordInput, 'Mínimo 8 caracteres, una mayúscula, un número y un carácter especial.');

	if (valid) {
		formStatus.style.color = 'green';
		formStatus.textContent = mode === 'register' ? 'Cuenta creada. Ya puedes comenzar.' : 'Sesión iniciada correctamente.';
	} else {
		formStatus.style.color = '#c00';
		formStatus.textContent = 'Revisa los campos marcados en rojo.';
	}
});