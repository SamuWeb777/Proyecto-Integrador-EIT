import { resolve } from 'node:path'

//console.log(resolve('pages'))

export default {
    server: {
        port: "2222",
    },
    css: {
        devSourcemap: true,
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                carrito: resolve('pages/carrito.html'),
                contacto: resolve('pages/contacto.html'),
                nosotros: resolve('pages/nosotros.html'),
                auriculares: resolve('pages/auriculares.html'),
                camaras: resolve('pages/camaras.html'),
                celulares: resolve('pages/celulares.html'),
                computadoras: resolve('pages/computadoras.html'),
                gamming: resolve('pages/gamming.html'),
                relojes: resolve('pages/relojes.html'),
                index: resolve('index.html')

            }

        }
    }
}