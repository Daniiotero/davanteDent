let citas = [];

//Esperamos a que el DOM esté cargado completamente
document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("form-cita"); //Cargamos el formulario
	const tbody = document.getElementById("tabla-citas-body"); //Cargamos la tabla de las citas

	const inputs = {
		fecha: document.getElementById("cita-fecha"),
		hora: document.getElementById("cita-hora"),
		nombre: document.getElementById("paciente-nombre"),
		apellidos: document.getElementById("paciente-apellidos"),
		dni: document.getElementById("paciente-dni"),
		telefono: document.getElementById("paciente-telefono"),
		fechaNac: document.getElementById("paciente-fecha-nac"),
		observaciones: document.getElementById("paciente-observaciones"),
	};

	//pintar tabla function

	console.log("DOM CARGADO");
});
