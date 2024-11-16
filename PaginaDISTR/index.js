const usuarios = [];

document.getElementById("ingresar").addEventListener("click", () => {
  const gmail = document.getElementById("gmail").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!gmail || !password) {
    console.log("Por favor, completa todos los campos.");
    return;
  }

  const usuario = usuarios.find(user => user.gmail === gmail);

  if (usuario) {
    if (usuario.password === password) {
      console.log("Bienvenido de nuevo:", gmail);
      console.log("Usuario actual");
    } else {
      console.log("Contraseña incorrecta.");
    }
  } else {
    console.log("El usuario no está registrado. Por favor, regístrate.");
  }
});

document.getElementById("registrar").addEventListener("click", () => {
  const gmail = document.getElementById("gmail").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!gmail || !password) {
    console.log("Por favor, completa todos los campos.");
    return;
  }

  const usuario = usuarios.find(user => user.gmail === gmail);

  if (usuario) {
    console.log("El usuario ya está registrado.");
  } else {
    usuarios.push({ gmail, password });
    console.log("Usuario registrado con éxito:", gmail);
    console.log("Nuevo usuario");
  }
});
