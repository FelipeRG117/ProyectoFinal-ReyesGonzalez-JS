document.addEventListener('keyup', e => {
    const buscador = document.getElementById('buscador');
    const terminoBusqueda = buscador.value.toLowerCase();

    document.querySelectorAll('.col-lg-4').forEach(card => {
        const titulo = card.querySelector('.card-title').textContent.toLowerCase();
        const descripcion = card.querySelector('.card-text').textContent.toLowerCase();
        const coincideTitulo = titulo.includes(terminoBusqueda);
        const coincideDescripcion = descripcion.includes(terminoBusqueda);
        
        if (coincideTitulo || coincideDescripcion) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
});

