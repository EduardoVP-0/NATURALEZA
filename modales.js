
// MODAL DEL JAGUAR 
document.getElementById('btnJaguar').addEventListener('click', function () {
    const container = document.getElementById('modalJaguar');
    container.innerHTML = ''; // Limpia por si ya hay un modal anterior
  
    fetch('/Jaguar.html')
      .then(res => res.text())
      .then(html => {
        container.innerHTML = html;
  
        // Espera un poco para asegurar que se inserte en el DOM antes de mostrar
        setTimeout(() => {
          const modalElement = document.getElementById('staticBackdrop');
          const modal = new bootstrap.Modal(modalElement);
          modal.show();
        }, 100);
      });
  });


// MODAL DEL MONO

document.getElementById('btnMono').addEventListener('click', function () {
  const container = document.getElementById('modalMono');
  container.innerHTML = ''; // Limpia por si ya hay un modal anterior

  fetch('/Mono.html')
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;

      // Espera un poco para asegurar que se inserte en el DOM antes de mostrar
      setTimeout(() => {
        const modalElement = document.getElementById('staticBackdrop1');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }, 100);
    });
});

// Modal del Quetzal

document.getElementById('btnQuetzal').addEventListener('click', function () {
  const container = document.getElementById('modalQuetzal');
  container.innerHTML = ''; // Limpia por si ya hay un modal anterior

  fetch('/Quetzal.html')
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;

      // Espera un poco para asegurar que se inserte en el DOM antes de mostrar
      setTimeout(() => {
        const modalElement = document.getElementById('staticBackdrop2');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }, 100);
    });
});

// Modal de la Guacamaya Roja

document.getElementById('btnRoja').addEventListener('click', function () {
  const container = document.getElementById('modalRoja');
  container.innerHTML = ''; // Limpia por si ya hay un modal anterior

  fetch('/Roja.html')
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;

      // Espera un poco para asegurar que se inserte en el DOM antes de mostrar
      setTimeout(() => {
        const modalElement = document.getElementById('staticBackdrop3');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }, 100);
    });
});

// Modal de la Guacamaya Roja

document.getElementById('btnTapir').addEventListener('click', function () {
  const container = document.getElementById('modalTapir');
  container.innerHTML = ''; // Limpia por si ya hay un modal anterior

  fetch('/Tapir.html')
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;

      // Espera un poco para asegurar que se inserte en el DOM antes de mostrar
      setTimeout(() => {
        const modalElement = document.getElementById('staticBackdrop4');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }, 100);
    });
});