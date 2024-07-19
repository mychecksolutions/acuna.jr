// script.js
document.getElementById('startButton').addEventListener('click', function() {
    // Cambiar la imagen de fondo
    document.querySelector('.container').style.backgroundImage = "url('image/991167200.jpg.0.jpg')";

    // Ocultar el texto anterior
    document.querySelector('.overlay').style.display = 'none';

    // Mostrar nuevo texto en el centro de la pantalla
    const newOverlay = document.createElement('div');
    newOverlay.classList.add('overlay');
    newOverlay.innerHTML = "<h2>¡Comienza el juego!</h2><p>Gira la rueda del mouse hacia delante para ver el video.</p>";
    document.body.appendChild(newOverlay);
    document.getElementById('miBoton').addEventListener('click', function() {
        window.location.href = 'video.html';
      });
      
    // Mostrar video al hacer scroll hacia delante
    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            // Si se hace scroll hacia delante, mostrar el video
            // Asegúrate de tener un elemento de video con la clase 'video-container' en tu HTML
            const videoContainer = document.querySelector('.video-container');
            videoContainer.style.display = 'block';
            // Puedes cargar el video o modificar su atributo 'src' para mostrar el video deseado
            // videoContainer.src = 'ruta/al/video.mp4';
        }
    });
});
