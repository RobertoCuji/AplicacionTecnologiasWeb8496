$('[data-toggle="popover"]').popover();

  $('[data-toggle="tooltip"]').tooltip();

// Accedemos al botón
var emailInput = document.getElementById('floatingEmailInput');

// evento para el input radio del "si"
document.getElementById('verificar').addEventListener('click', function(e) {
  console.log('Vamos a habilitar el input text');
  emailInput.disabled = true;
});

