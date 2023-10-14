
/* Librerías */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

/* Archivos de proyecto */
import './css/style.css'

import {
    calcularTotal,
    comprarProducto,
    eliminarProducto,
    eliminarProductoCompra,
    leerLocalStorage,
    leerLocalStorageCompra,
    obtenerEvento,
    procesarPedido,
    vaciarCarrito
} from './src/carrito'


const productos = document.getElementById('lista-productos')
//console.log(productos)
const carrito = document.getElementById('carrito')
// console.log(carrito)
const carritoCompra = document.getElementById('lista-compra')

cargarEventos();
function cargarEventos() {
    const ruta = String(location.href)

    console.log(ruta);
    if (ruta.includes('carrito')) {
    esCarrito();
    } else if (ruta.includes('nosotros')) {
        esNosotros();
    }else if(ruta.includes('computadoras')){
        esComputadoras();    
    }else if(ruta.includes('camaras')){
        esCamaras();    
    }else if(ruta.includes('celulares')){
        esCelulares();    
    }else if(ruta.includes('auriculares')){
        esAuriculares();    
    }else if(ruta.includes('gamming')){
        esGamming();    
    }else if(ruta.includes('relojes')){
        esRelojes();    
    }else if (ruta.includes('contacto')) {
        esContacto();
    } else if (!ruta.includes('carrito', 'nosotros', 'contactos', 'computadoras')) {
        esIndex();
    };

}

function esIndex() {
    console.log('No estoy en carrito!')
    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')
    console.log(vaciarCarritoBtn, procesarPedidoBtn)

    // Se ejecuta cuando presiono sobre el botón comprar
    productos.addEventListener('click', (e) => comprarProducto(e))

    // Al cargar el documento se muestra lo almacenado en el LS
    document.addEventListener('DOMContentLoaded', leerLocalStorage())

    //Cuando se elimina un producto del carrito
    carrito.addEventListener('click', e => eliminarProducto(e))

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e))

    // Enviar pedido a otra página
    procesarPedidoBtn.addEventListener('click', e => procesarPedido(e))

}
function esComputadoras() {
    console.log('No estoy en carrito!')
    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')
    console.log(vaciarCarritoBtn, procesarPedidoBtn)

    productos.addEventListener('click', (e) => comprarProducto(e))
    document.addEventListener('DOMContentLoaded', leerLocalStorage())
    carrito.addEventListener('click', e => eliminarProducto(e))
    vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e))
    procesarPedidoBtn.addEventListener('click', e => procesarPedido(e))
}
function esAuriculares() {
    console.log('No estoy en carrito!')
    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')
    console.log(vaciarCarritoBtn, procesarPedidoBtn)

    productos.addEventListener('click', (e) => comprarProducto(e))
    document.addEventListener('DOMContentLoaded', leerLocalStorage())
    carrito.addEventListener('click', e => eliminarProducto(e))
    vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e))
    procesarPedidoBtn.addEventListener('click', e => procesarPedido(e))
}
function esCamaras() {
    console.log('No estoy en carrito!')
    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')
    console.log(vaciarCarritoBtn, procesarPedidoBtn)

    productos.addEventListener('click', (e) => comprarProducto(e))
    document.addEventListener('DOMContentLoaded', leerLocalStorage())
    carrito.addEventListener('click', e => eliminarProducto(e))
    vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e))
    procesarPedidoBtn.addEventListener('click', e => procesarPedido(e))
}
function esCelulares() {
    console.log('No estoy en carrito!')
    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')
    console.log(vaciarCarritoBtn, procesarPedidoBtn)

    productos.addEventListener('click', (e) => comprarProducto(e))
    document.addEventListener('DOMContentLoaded', leerLocalStorage())
    carrito.addEventListener('click', e => eliminarProducto(e))
    vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e))
    procesarPedidoBtn.addEventListener('click', e => procesarPedido(e))
}
function esGamming() {
    console.log('No estoy en carrito!')
    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')
    console.log(vaciarCarritoBtn, procesarPedidoBtn)

    productos.addEventListener('click', (e) => comprarProducto(e))
    document.addEventListener('DOMContentLoaded', leerLocalStorage())
    carrito.addEventListener('click', e => eliminarProducto(e))
    vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e))
    procesarPedidoBtn.addEventListener('click', e => procesarPedido(e))
}
function esRelojes() {
    console.log('No estoy en carrito!')
    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')
    console.log(vaciarCarritoBtn, procesarPedidoBtn)

    productos.addEventListener('click', (e) => comprarProducto(e))
    document.addEventListener('DOMContentLoaded', leerLocalStorage())
    carrito.addEventListener('click', e => eliminarProducto(e))
    vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e))
    procesarPedidoBtn.addEventListener('click', e => procesarPedido(e))
}
function esNosotros(){
    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')
    console.log(vaciarCarritoBtn, procesarPedidoBtn)



    document.addEventListener('DOMContentLoaded', leerLocalStorage())
    carrito.addEventListener('click', e => eliminarProducto(e));
    vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e));
    procesarPedidoBtn.addEventListener('click', e => procesarPedido(e));

}

function esContacto(){
    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')
    console.log(vaciarCarritoBtn, procesarPedidoBtn)


        document.addEventListener('DOMContentLoaded', leerLocalStorage())
        carrito.addEventListener('click', e => eliminarProducto(e))
        vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e))
        procesarPedidoBtn.addEventListener('click', e => procesarPedido(e))

}


function esCarrito() {
    console.log('Estoy en carrito')
    // Voy a leer el localStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorageCompra())
    carritoCompra.addEventListener('click', e => eliminarProductoCompra(e))

    calcularTotal()

    carritoCompra.addEventListener('change', e => obtenerEvento(e))
    carritoCompra.addEventListener('keyup', e => obtenerEvento(e))
}
//Modo oscuroo********
const swith = document.querySelector('.switch');
const body = document.body;
const isLocalStorageActive = localStorage.getItem('isActive');

document.addEventListener('DOMContentLoaded', () => {
    if (isLocalStorageActive === 'true') {
        swith.classList.add('active');
        body.classList.add('active');
    }

    swith.addEventListener('click', e => {
        swith.classList.toggle('active');
        body.classList.toggle('active');

        const isActive = body.classList.contains('active');
        localStorage.setItem('isActive', isActive.toString());
    });
});
//*****************
