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

	function pintarTabla() {
		tbody.innerHTML = "";
		if (citas.length === 0) {
			const filaVacia = document.createElement("tr");
			const celdaVacia = document.createElement("td");
			celdaVacia.colSpan = 10;
			celdaVacia.textContent = "No hay citas";
			filaVacia.appendChild(celdaVacia);
			tbody.appendChild(filaVacia);
			return;
		}

		citas.forEach((nuevaCita, index) => {
			const fila = document.createElement("tr");

			fila.setAttribute("data-id", nuevaCita.id);

			const celdaIndice = document.createElement("td");
			celdaIndice.textContent = index + 1;
			fila.appendChild(celdaIndice);

			const celdaFecha = document.createElement("td");
			celdaFecha.textContent = `${nuevaCita.fecha}`;
			fila.appendChild(celdaFecha);

			const celdaHora = document.createElement("td");
			celdaHora.textContent = `${nuevaCita.hora}`;
			fila.appendChild(celdaHora);

			const celdaNombre = document.createElement("td");
			celdaNombre.textContent = nuevaCita.nombre;
			fila.appendChild(celdaNombre);

			const celdaApellidos = document.createElement("td");
			celdaApellidos.textContent = nuevaCita.apellidos;
			fila.appendChild(celdaApellidos);

			const celdaDni = document.createElement("td");
			celdaDni.textContent = nuevaCita.dni;
			fila.appendChild(celdaDni);

			const celdaTelefono = document.createElement("td");
			celdaTelefono.textContent = nuevaCita.telefono;
			fila.appendChild(celdaTelefono);

			const celdaFechaNac = document.createElement("td");
			celdaFechaNac.textContent = nuevaCita.fechaNac;
			fila.appendChild(celdaFechaNac);

			const celdaObs = document.createElement("td");
			celdaObs.textContent = nuevaCita.observaciones;
			fila.appendChild(celdaObs);

			const celdaAcciones = document.createElement("td");
			celdaAcciones.textContent = "";
			fila.appendChild(celdaAcciones);

			tbody.appendChild(fila);
		});
	}

	form.addEventListener("submit", function (event) {
		event.preventDefault(); //Prevenimos que se recargue la pagina

		console.log("Formulario enviado");
		console.log("IDs:", inputs);

		console.log("citas completas", citas);

		//Leemos valores de los inputs
		const fecha = document.getElementById("cita-fecha").value.trim();
		const hora = document.getElementById("cita-hora").value.trim();
		const nombre = document.getElementById("paciente-nombre").value.trim();
		const apellidos = document
			.getElementById("paciente-apellidos")
			.value.trim();
		const dni = document.getElementById("paciente-dni").value.trim();
		const telefono = document.getElementById("paciente-telefono").value.trim();
		const fechaNac = document.getElementById("paciente-fecha-nac").value.trim();
		const observaciones = document
			.getElementById("paciente-observaciones")
			.value.trim();

		//guardamos los valores de los inputs en un objeto cita
		const nuevaCita = {
			id: Date.now(),
			fecha,
			hora,
			nombre,
			apellidos,
			dni,
			telefono,
			fechaNac,
			observaciones,
		};
		console.log("estas es la nueva cita", nuevaCita);

		//guardamos en array de citas
		citas.push(nuevaCita);

		console.log("citas completas", citas);

		//pintamos la tabla con los nuevos valores
		pintarTabla();

		//limpiamos el formulario
		form.reset();
	});

	console.log("DOM CARGADO");
});
