document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value; // Guarda cada clave y valor en un objeto
    });

    console.log("Datos del formulario enviados:", formObject);

    // Aquí puedes guardar los datos en un servidor o usarlos como sea necesario.
});

// Validación para permitir solo letras en ciertos campos
['name', 'state', 'country'].forEach(id => {
    document.getElementById(id).addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    });
});

// Validación para permitir solo números en ciertos campos
['postal-code', 'phone'].forEach(id => {
    document.getElementById(id).addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]/g, '');
    });
});

