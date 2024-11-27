
let index = 0; 
const carrusel = document.querySelector('.carrusel'); 
const imagenes = document.querySelectorAll('.carrusel img');
const totalImagenes = imagenes.length; 

function cambiarImagen() {
    index = (index + 1) % totalImagenes;
    const desplazamiento = index * 100; 
    carrusel.style.transform = `translateX(-${desplazamiento}%)`; 
}



setInterval(cambiarImagen, 5000);


document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});


const productos = [
    {
        id: 1,
        titulo: 'DESTROYAH',
        descripcion: 'Bebida carbonatada sabor cereza que contiene Cafeina y Taurina para mejorar el rendimiento deportivo',
        imagen: 'Img/lata 1.png',
    },
    {
        id: 2,
        titulo: 'KING GHIDORA',
        descripcion: 'Bebida carbonatada sabor Mango-Piña dirigido a dar extra energia para todos aquellos que necesiten dar un poco mas en el dia.',
        imagen: 'Img/lata 2.png',
    },
    {
        id: 3,
        titulo: 'GODZILLA',
        descripcion: 'Bebida carbonatada con sabor de una explosion de frutos rojos con cafeina y taurina para restaurar la energia.',
        imagen: 'Img/lata 3.png',
    },
];


const panelDetalle = document.getElementById('panel-detalle');
const detalleImagen = document.getElementById('detalle-imagen');
const detalleTitulo = document.getElementById('detalle-titulo');
const detalleDescripcion = document.getElementById('detalle-descripcion');
const botonesLeerMas = document.querySelectorAll('.btn-leer-mas');
const botonCerrar = document.querySelector('.cerrar-panel');


botonesLeerMas.forEach((boton) => {
    boton.addEventListener('click', () => {
        const idProducto = boton.getAttribute('data-producto');
        const producto = productos.find((prod) => prod.id == idProducto);

        detalleImagen.src = producto.imagen;
        detalleTitulo.textContent = producto.titulo;
        detalleDescripcion.textContent = producto.descripcion;

        panelDetalle.style.display = 'flex';
    });
});


botonCerrar.addEventListener('click', () => {
    panelDetalle.style.display = 'none';
});


panelDetalle.addEventListener('click', (e) => {
    if (e.target === panelDetalle) {
        panelDetalle.style.display = 'none';
    }
});
