document.addEventListener("DOMContentLoaded", () => {

    // === VALIDACIÓN DE FORMULARIO (Estilo Bootstrap) ===
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        // Si los campos HTML5 nativos (required, minlength, type="email") fallan
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            alert("¡Formulario enviado con éxito!");
        }

        // Añade la clase de Bootstrap para mostrar visualmente los errores (.is-invalid)
        form.classList.add("was-validated");
    }, false);
});