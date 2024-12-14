// Seleccionar el botón de envío
document.getElementById("formularioValido").addEventListener("click", event => {
    event.preventDefault(); // Prevenir comportamiento predeterminado del botón

    // Seleccionar los valores de cada campo
    const nombre = document.querySelector("form input[name='nombre']").value.trim();
    const apellido = document.querySelector("form input[name='apellido']").value.trim();
    const email = document.querySelector("form input[name='email']").value.trim();
    const telefono = document.querySelector("form input[name='telefono']").value.trim();
    const cantidad = document.getElementById("cantidad").value.trim(); // Este campo no está dentro de un form

    // Validaciones
    let formularioValido = true;

    if (nombre === "") {
        formularioValido = false;
        alert("El nombre es obligatorio.");
    }

    if (apellido === "") {
        formularioValido = false;
        alert("El apellido es obligatorio.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formularioValido = false;
        alert("El email no es válido.");
    }

    if (telefono === "") {
        formularioValido = false;
        alert("El teléfono es obligatorio.");
    }

    if (cantidad === "" || isNaN(cantidad) || cantidad <= 0) {
        formularioValido = false;
        alert("La cantidad de comensales debe ser mayor a 0.");
    }

    if (formularioValido) {
        alert("Formulario enviado correctamente.");
        const datosReserva = { nombre, apellido, email, telefono, cantidad };
        console.log(datosReserva);
    }
});
