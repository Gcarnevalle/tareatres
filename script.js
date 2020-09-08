function agregarPista(texto) {
    $pistas = document.querySelector('.pistas');

    $pistas.classList.remove('hidden');

    $pista = document.createElement('div');
    $pista.classList.add('alert', 'alert-info');
    $pista.innerText = texto;

    $pistas.appendChild($pista);
}

function desabilitarFormAdivinanza($botonAceptar) {
    $formAdivinanza = document.querySelector('.adivinanza form');
    $formAdivinanza.classList.add('hidden');

    $botonAceptar.remove();
}

function mostrarMsjResultado($botonAceptar, ganador) {
    $notificacion = document.querySelector('#notificacion');
    $notificacionTitulo = document.createElement('h4');

    if(ganador) {
        $notificacion.classList.add('alert-success');
        $notificacionTitulo.classList.add('alert-heading');
        $notificacionTitulo.innerText = "¡Bien Hecho!";
    } else {
        $notificacion.classList.add('alert-danger');
        $notificacionTitulo.classList.add('alert-heading');
        $notificacionTitulo.innerText = "¡Perdiste!";
    }

    $notificacion.appendChild($notificacionTitulo);

    $notificacionParrafo = document.createElement('p');
    $notificacionParrafo.innerHTML = "El bikini fue creado por el ingeniero francés Louis Réard. Micheline Bernardini, una stripper, lo lució ante el público por primera vez el 5 de julio de 1946. \n<hr> Réard se inspiró para nombrar su invento en el atolón Bikini,  \
    lugar donde se acababan de realizar las primeras pruebas con bomba atómica de la posguerra. \
    A las mujeres francesas les gustó el diseño, pero la iglesia católica y varios medios pensaron que era un diseño demasiado atrevido y escandaloso. \
    En 1951, las concursantes del primer certamen de belleza Miss Mundo lo utilizaron, sin embargo poco después fueron prohibidos en varios países.";
    
    $notificacion.appendChild($notificacionParrafo);

    $notificacion.classList.remove('hidden');
    
    desabilitarFormAdivinanza($botonAceptar);
}

function habilitarAdivinanza() {
    let intentos = 4;
    $inputAño = document.querySelector('#año-gol');
    $botonAceptar = document.querySelector('#boton-adivinanza');
    $numeroIntentos = document.querySelector('#numero-intentos');
    

    $botonAceptar.addEventListener('click', () => {
        event.preventDefault();
        if(Number($inputAño.value) === 1946) {
            mostrarMsjResultado($botonAceptar, true);
        } else if(intentos === 2) {
            agregarPista('194... número par')
        } else if(intentos === 3) {
            agregarPista('En 1951 las concursantes del primer certamen de belleza MISS MUNDO, las utilizaron')
        } else if(intentos === 1) {
            mostrarMsjResultado($botonAceptar, false);
        }
       
        intentos -= 1;
        $numeroIntentos.innerText = intentos;
    })

}

habilitarAdivinanza();