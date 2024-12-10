const imagen = document.getElementById('imagen');

imagen.addEventListener('mousemove', function(e) {
  const width = imagen.clientWidth;
  const height = imagen.clientHeight;
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;

  const posX = ((mouseX / width) * 100).toFixed(2);
  const posY = ((mouseY / height) * 100).toFixed(2);

  imagen.style.transformOrigin = `${posX}% ${posY}%`;
});
//muestra otra imagen en el contenedor principal
function mostrarImagen(imgElement) {
    const principalDiv = document.getElementById('principal');
    principalDiv.innerHTML = ''; // Limpia el contenido del div principal
  
    const nuevaImagen = document.createElement('img');
    nuevaImagen.src = imgElement.src;
    nuevaImagen.alt = imgElement.alt;
    nuevaImagen.style.width = '100%'; // Ajusta el tamaño de la imagen
    nuevaImagen.style.height = 'auto';
  
    principalDiv.appendChild(nuevaImagen);
  }
  
  function mostrarImagen(imgElement) {
    const principalDiv = document.getElementById('principal');
    principalDiv.innerHTML = ''; // Limpia el contenido del div principal
  
    const nuevaImagen = document.createElement('img');
    nuevaImagen.src = imgElement.src;
    nuevaImagen.alt = imgElement.alt;
    nuevaImagen.style.width = '100%'; // Ajusta el tamaño de la imagen
    nuevaImagen.style.height = 'auto';
    nuevaImagen.classList.add('zoom'); // Añade la clase zoom para el efecto
  
    principalDiv.appendChild(nuevaImagen);
  }
  
  const imagenesMiniatura = document.querySelectorAll('.miniatura');
  
  imagenesMiniatura.forEach(imagen => {
    imagen.addEventListener('click', function() {
      mostrarImagen(this);
    });
  });
  
  