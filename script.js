const formulario = document.getElementById('formularioContacto');
const resultado = document.getElementById('resultadoEnvio');

formulario.addEventListener('submit', function (evento) {
  // Capturamos los datos
  const nombre = document.getElementById('nombre').value;

  // Activamos la confirmación visual
  resultado.style.display = 'block';
  resultado.classList.add('caja-resultado--exitoso');

  resultado.innerHTML = `
    <strong>¡Formulario procesado!</strong><br>
    Hola ${nombre}, Tu mensaje ha sido envíado.
  `;

 
  setTimeout(() => {
    formulario.reset();
  }, 1000);

  
  setTimeout(() => {
    resultado.style.display = 'none';
  }, 8000);
});
